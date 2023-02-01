import "./Hub.css";
import { initContent } from "../../main";
import { ProjectGame } from "../../components/ProjectGame/ProjectGame";
import { games } from "../../data/games";

export const Hub = () => {
    const main = document.querySelector("main");
    main.innerHTML = `
    <section class="games">
    <div class="text1">
    <h1>¡BIENVENIDO ${localStorage.getItem("user").toUpperCase()}!</h1>
    <p>ESCOGE UN JUEGO</p>
    </div>
    <div class="game-container"></div>
    <div class="button-log">
    <button class="button-logout">Logout</button>
    </div>
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
            div.innerHTML = ProjectGame(game).toUpperCase();
            container.appendChild(div);
        }
}