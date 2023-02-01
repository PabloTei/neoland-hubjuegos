import "./Hub.css";
import { initContent } from "../../main";
import { Login } from "../Login/Login";

export const Hub = () => {
    const main = document.querySelector("main");
    main.innerHTML = `
    <h1>Hola ${localStorage.getItem("user")}</h1>
    <button class="button-logout">Logout</button>
    `
    logout();
}

const logout = () => {
    const inputLogout = document.querySelector(".button-logout");
    inputLogout.addEventListener("click", (ev) => {
        localStorage.removeItem("user");
        initContent("Login");
    })
}