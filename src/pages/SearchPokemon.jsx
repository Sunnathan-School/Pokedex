import {
    Box,
    Button,
    FormControl,
    FormGroup,
    Grid,
    TextField,
    Typography
} from "@mui/material";
import Page from "../components/Page.jsx";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getAllPokemons, getPokemonSpriteUrl} from "../services/Pokemon.jsx";
import PokemonItem from "../components/PokemonItem.jsx";

function SearchPokemon(){

    const [pokemonList, setPokemonList] = useState([]);
    const [searchValue, setSearchValue] = useState("");


    useEffect(() => {
            getAllPokemons().then(
                response => {
                    setPokemonList(response.results)
                }
            )
    }, []);

    let filteredPokemonList = pokemonList.filter(pokemon =>
        pokemon.name.startsWith(searchValue.toLowerCase())
    );


    return(
        <Page>
            <Button sx={{marginY:2}} variant="contained" color="secondary" component={Link} to="/pokedex">Retour au Pokedex</Button>

            <Box>
                <Typography variant="h1" sx={{textAlign:'center'}}>Rechercher un Pokemon</Typography>
            </Box>
            <FormGroup sx={{marginY:1}}>
                <FormControl>
                    <TextField label="Recherche" variant="outlined" fullWidth value={searchValue}
                               onChange={(e) => setSearchValue(e.target.value)}/>
                </FormControl>
            </FormGroup>

            <Box>
                <Typography variant="p">{filteredPokemonList.length} pokemons trouvés</Typography>
                <Grid container spacing={2}>
                    {
                        filteredPokemonList.map((pokemon, index) => {
                                const originalIndex = pokemonList.findIndex(p => p.name === pokemon.name);

                                return (
                                    <PokemonItem key={originalIndex} pokemonId={originalIndex + 1} pokemonName={pokemon.name} />
                                )
                        }

                        )
                    }
                </Grid>

            </Box>


        </Page>
    )
}


export default SearchPokemon