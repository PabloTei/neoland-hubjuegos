import "./PokeApi.css";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/"

let allPokemons = [];

const myPokemons = async () => {
    for (let i = 1; i < 151; i++) {
        const data = await fetch (`${POKEMON_URL}${i}`)
        const info = await data.json();
        allPokemons.push(info);
    }  

}


export const PokeApi = async () => {
    const main = document.querySelector("main");
    main.innerHTML = 
    `
    <div class="card-container">
    </div>
    
    `
    await myPokemons();
    cardPokemon();
}

const cardPokemon = () => {
    const container = document.querySelector(".card-container");
    for (const pokemon of allPokemons) {
        const div = document.createElement("div");
        div.innerHTML = ProjectCard(pokemon);
        console.log(ProjectCard(pokemon))
        container.appendChild(div);
    }
}

