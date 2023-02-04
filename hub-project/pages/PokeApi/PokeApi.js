import "./PokeApi.css";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { tiposPokemon } from "../../data/tipos";

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
    filterByType(allPokemons);
    
    
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
    for (const tipoPokemon of tiposPokemon) {
        const tipos = document.createElement("div");
        tipos.innerHTML = `
        <button class="${tipoPokemon}-type">${tipoPokemon}</button>
        `
        type.appendChild(tipos);
    }
}

const filterByType = (allPokemons) => {
    const myBtn = document.querySelector(".bug-type");// esto se podrá insertar por parámetro para que me coja cada clase cuando le de a click
    const container = document.querySelector(".card-container");// selecionamos la caja donde vamos a querer pintar los pokemons filtrados y para también borrar lo que hay antes
    myBtn.addEventListener("click", () => { // añadimos escuchador de eventos para que cuando haga click, primero borre el contenido del contenedor y segundo se muestre por pantalla la carta
        container.innerHTML = ""; // vaciamos contenedor
        for (const pokemon of allPokemons) { // recorremos allpokemons para sacar cada pokemon individualizado
            for (const type of pokemon.types) { // recorremos cada pokemon individualizado para sacar el tipo
                if (type.type.name === "bug") { // aplicamos condicional por si contiene la palabra del tipo
                const tipo = document.createElement("div"); // creamos la carta
                tipo.innerHTML = `
                ${ProjectCard(pokemon)}
                <p>TIPO: ${(type.type.name).toUpperCase()}</p>
                ` // inyectamos nuestro molde de carta
                container.appendChild(tipo); // lo añadimos
                }
            }
        }
    })
}                     