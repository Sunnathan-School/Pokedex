import axios from "axios";

export const getAllPokemons = async () => {

    let { data } = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150")

    return data
}

export const getPokemonSpriteUrl = (index) => {

    return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + index + '.png'
}

export const getPokemonDetails = async (id) => {

    let { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/" + id)
    // console.log("data" + data)
    return data
}
