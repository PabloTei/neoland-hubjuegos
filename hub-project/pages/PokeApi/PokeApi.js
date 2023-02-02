import axios from "axios";
import "./PokeApi.css";
const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/"

const myPokemons = () => {
    let allPokemons = [];
    for (let i = 1; i < 151; i++) {
        axios.get(`${POKEMON_URL}${i}`).then((res) => {
            allPokemons = res.data;
            console.log(allPokemons);
        })
    }
}

export const PokeApi = () => {
    const main = document.querySelector("main");
    main.innerHTML = 
    `
    <h1>hola</h1>

    `
    myPokemons();
}


