import "./Hub.css";
import { initContent } from "../../main";
import { ProjectGame } from "../../components/ProjectGame/ProjectGame";
import { games } from "../../data/games";

export const Hub = () => {
    const main = document.querySelector("main");
    main.innerHTML = `
    <section class="games">
    <h1>Bienvenido ${localStorage.getItem("user")}</h1>
    <p>Escoge un juego</p>
    <div class="game-container"></div>
    <button class="button-logout">Logout</button>
    </section>
    `
    logout();
    hubGames();
}

const logout = () => {
    const inputLogout = document.querySelector(".button-logout");
    inputLogout.addEventListener("click", (ev) => {
        localStorage.removeItem("user");
        initContent("Login");
    })
}

const hubGames = () => {
        const container = document.querySelector(".game-container");
        for (const game of games) {
            const div = document.createElement("div");
            div.innerHTML = ProjectGame(game);
            container.appendChild(div);
        }
}