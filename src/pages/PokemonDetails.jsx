import Page from "../components/Page.jsx";
import {Box, Button, Chip, CircularProgress, FormControl, FormGroup, Grid, Typography} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPokemonDetails, getPokemonSpriteUrl} from "../services/Pokemon.jsx";
import {
    addPokemonToSelectedUserPokedex,
    getSelectedUserPokedex,
    removePokemonFromSelectedUserPokedex
} from "../services/UserPokedex.jsx";

function PokemonDetails(){
    const { id } = useParams();

    const [pokemon, setPokemon] = useState([]);
    const [isInPokedex, setIsInPokedex] = useState(false);



    useEffect(() => {
        getPokemonDetails(id).then(
            response => {
                setPokemon(response)
                setIsInPokedex(getSelectedUserPokedex().includes(Number(id)));
            }
        )
    }, []);

    const handleClickAddPokemon = () => {
        addPokemonToSelectedUserPokedex(pokemon);
        setIsInPokedex(true)
    }

    const handleClickRemovePokemon = () => {
        removePokemonFromSelectedUserPokedex(pokemon);
        setIsInPokedex(false);
    }

    return (
        <Page>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h1">{pokemon.name}</Typography>
                <Typography variant="h1">#{id}</Typography>
            </Box>
            <Box display="flex" flexWrap="wrap" gap={1} my={2}>
                {pokemon.types && pokemon.types.map((type, index) => (
                    <Chip key={index} label={type.type.name} />
                ))}
            </Box>
            <Box>
                <img src={getPokemonSpriteUrl(id)} alt={pokemon.name} width="100%"/>
            </Box>
            <Typography variant="h2">Statistiques</Typography>
            <Grid container spacing={2}>
                {pokemon.stats && pokemon.stats.map((stat, index) => (
                    <Grid item xs={4} key={index}>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <Box position="relative" display="inline-flex">
                                <CircularProgress variant="determinate" value={stat.base_stat} />
                                <Box
                                    top={0}
                                    left={0}
                                    bottom={0}
                                    right={0}
                                    position="absolute"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Typography variant="caption" component="div" color="text.secondary">
                                        {stat.base_stat}
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography variant="body2">{stat.stat.name}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Box mt={2}>
                <FormGroup>
                    <FormControl>
                        {isInPokedex ? (
                            <Button variant="contained" color="primary" component={Link} to="/pokedex" onClick={handleClickRemovePokemon}>
                                Supprimer du pokedex
                            </Button>
                        ) : (
                            <Button variant="contained" color="primary" component={Link} to="/pokedex" onClick={handleClickAddPokemon}>
                                Ajouter dans le pokedex
                            </Button>
                        )}
                    </FormControl>
                    <FormControl>
                        <Button variant="outlined" color="primary" component={Link} to="/pokedex" sx={{marginY:2}}>
                            Retour au pokedex
                        </Button>
                    </FormControl>
                </FormGroup>


            </Box>
        </Page>
    )
}


export default PokemonDetails