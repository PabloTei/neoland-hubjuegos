import "./PokeApi.css";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/"



const myPokemons = async () => {
    let allPokemons = [];
    for (let i = 1; i < 152; i++) {
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
    <div class="input-lupa">
    <input type="text" class="input-filtro" placeholder="ej. Charmander">
    <button class="pulsar-buscar"><img src="https://res.cloudinary.com/depifliz3/image/upload/v1675431895/samples/ecommerce/buscar_a0xppt.png"></button>
    </div>
    </div>
    <div class="card-container">
    </div>
    
    `
    const allPokemons = await myPokemons();
    cardPokemon(allPokemons);
    filterPokemon(allPokemons);
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

const filterPokemon = (allPokemons) => {
    const myInput = document.querySelector(".input-filtro");
    const myButton = document.querySelector(".pulsar-buscar");
    const container = document.querySelector(".card-container");
    myButton.addEventListener("click", () => {
        container.innerHTML = "";
        for (const pokemon of allPokemons) {
            if (pokemon.name.includes((myInput.value).toLowerCase())) {
                const div = document.createElement("div");
                div.innerHTML = ProjectCard(pokemon);
                container.appendChild(div);
                for (const type of pokemon.types) {
                    const tipo = document.createElement("div");
                    tipo.innerHTML = `<p>Tipo: ${type.type.name}</p>`
                    div.appendChild(tipo);
                }
            }
            /*for (const type of pokemon.types) {
                console.log(type.type.name);
            }*/
        }
    })
}


