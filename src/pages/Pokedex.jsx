import Page from "../components/Page.jsx";
import {Alert, Box, Button, Divider, FormGroup, Grid, Typography} from "@mui/material";
import {getSelectedUserId} from "../services/Users.jsx";
import {Link} from "react-router-dom";
import {getSelectedUserPokedex} from "../services/UserPokedex.jsx";
import {useEffect, useState} from "react";
import {getPokemonDetails} from "../services/Pokemon.jsx";
import PokemonItem from "../components/PokemonItem.jsx";

function Pokedex() {

    const selectedUser = getSelectedUserId();
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            const pokemonIds = getSelectedUserPokedex();
            const pokemons = [];

            for (let id of pokemonIds) {
                const pokemon = await getPokemonDetails(id);
                pokemons.push(pokemon);
            }

            setPokemonList(pokemons);
        };

        fetchPokemons();
    }, []);

    if (!selectedUser) {
        return (
            <Page>
                <Box>
                    <Alert severity="error">Erreur : Aucun utilisateur sélectionné</Alert>
                    <Button variant="contained" color="primary" component={Link} to="/login">
                        Aller à la page de connexion
                    </Button>
                </Box>
            </Page>
        );
    }


    return (
        <Page>
            <Box>
                <Typography variant="h1" sx={{textAlign:'center'}}>Pokedex</Typography>
            </Box>
            <Box>
                {getSelectedUserPokedex().length === 0 && (
                    <Typography variant="p">Votre pokedex est vide</Typography>
                )}
                <Grid container spacing={2}>
                    {pokemonList && pokemonList.map((pokemon, index) => (
                        <PokemonItem key={index} pokemonId={pokemon.id} pokemonName={pokemon.name} />
                        ))}
                </Grid>
            </Box>
            <Divider sx={{marginY:2}}/>
            <Box>
                <FormGroup>
                    <Button variant="contained" color="primary" component={Link} to="/searchPokemon">
                        Ajouter un Pokemon
                    </Button>
                </FormGroup>
            </Box>
        </Page>
    )
}

export default Pokedex;