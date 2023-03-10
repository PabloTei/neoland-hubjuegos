import "./PokeApi.css";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { tiposPokemonObject } from "../../data/tipos";

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
    <div class="container-types">
    </div>
    </div>
    <div class="card-container">
    </div>
    
    `
    const allPokemons = await myPokemons();
    cardPokemon(allPokemons);
    filterPokemon(allPokemons);
    createButton();
    ultimateFunction(allPokemons);
    
}

const cardPokemon = (allPokemons) => {
    const container = document.querySelector(".card-container");
    container.innerHTML = "";

    for (const pokemon of allPokemons) {
        const div = document.createElement("div");
        div.innerHTML = ProjectCard(pokemon);
        container.appendChild(div);
        for (const type of pokemon.types) {
            const tipo = document.createElement("div");
            tipo.innerHTML = `<p class="type-filter">TIPO: ${(type.type.name).toUpperCase()}</p>`
            div.appendChild(tipo);
        }
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
                    tipo.innerHTML = `<p>TIPO: ${(type.type.name).toUpperCase()}</p>`
                    div.appendChild(tipo);
                }
            }
        }
    })
}


const createButton = () => {
    const type = document.querySelector(".container-types");
    for (const tipoPokemon of tiposPokemonObject) {
        const tipos = document.createElement("div");
        tipos.innerHTML = `
        <button class="${tipoPokemon.name}-type">
        <img src="${tipoPokemon.img}" alt="type-${tipoPokemon.name}">
        </button>
        `
        type.appendChild(tipos);
    }
}


const ultimateFunction = (allPokemons) => {
    for (const tipo of tiposPokemonObject) {
        const myBtn = document.querySelector(`.${tipo.name}-type`);
        const container = document.querySelector(".card-container");
        myBtn.addEventListener("click", () => {
            container.innerHTML = "";
            for (const pokemon of allPokemons) {
                for (const type of pokemon.types) {
                    if (type.type.name === tipo.name) {
                        const tipo3 = document.createElement("div");
                        tipo3.innerHTML = `
                        ${ProjectCard(pokemon)}
                        <p>TIPO: ${(type.type.name).toUpperCase()}</p>
                        `
                        container.appendChild(tipo3); 
                    }
                }
            }
        })
    }
}

