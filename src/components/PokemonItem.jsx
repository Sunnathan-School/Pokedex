import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {getPokemonSpriteUrl} from "../services/Pokemon.jsx";
import {Link} from "react-router-dom";
import React from "react";

function PokemonItem({ pokemonId, pokemonName}) {
  return (
      <Grid item xs={12} sm={6}>
          <Card sx={{border: '1px solid rgba(0,0,0,0.25)'}}>
              <CardMedia
                  component="img"
                  height="100%"
                  image={getPokemonSpriteUrl(pokemonId)}
                  alt={pokemonName}
              />
              <CardContent>
                  <Box display="flex" flexDirection="column" alignItems="center">
                      <Typography variant="h6">{capitalizeFirstLetter(pokemonName)}</Typography>
                      <CardActions>
                          <Button variant="contained" color="primary" component={Link} to={"/pokemon/" + (pokemonId)}>
                              Voir le Pokemon
                          </Button>
                      </CardActions>
                  </Box>
              </CardContent>
          </Card>
      </Grid>
  );
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default PokemonItem;