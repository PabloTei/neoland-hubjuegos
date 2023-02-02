import "./PokeApi.css";
const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/"

const myPokemons = async () => {
    let allPokemons = [];
    for (let i = 1; i < 151; i++) {
        const data = await fetch (`${POKEMON_URL}${i}`)
        const info = await data.json();
        allPokemons.push(info);
    }

    for (const pokemon of allPokemons) {
        console.log(pokemon.name)
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


