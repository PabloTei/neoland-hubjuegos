import "./PokeApi.css";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/"



const myPokemons = async () => {
    let allPokemons = [];
    for (let i = 1; i < 151; i++) {
        const data = await fetch (`${POKEMON_URL}${i}`)
        const info = await data.json();
        allPokemons.push(info);
    }  
    return allPokemons;
}


export const PokeApi = async () => {
    const main = document.querySelector("main");
    main.innerHTML = 
    `
    <div class="botonfiltro">
    <h2>Buscador Pokemon</h2>
    <input type="text" class="input-filtro" placeholder="ej. Charmander">
    </div>
    <div class="card-container">
    </div>
    
    `
    const allPokemons = await myPokemons();
    cardPokemon(allPokemons);
}

const cardPokemon = (allPokemons) => {
    const container = document.querySelector(".card-container");
    container.innerHTML = "";

    for (const pokemon of allPokemons) {
        const div = document.createElement("div");
        div.innerHTML = ProjectCard(pokemon);
        container.appendChild(div);
    }
}

