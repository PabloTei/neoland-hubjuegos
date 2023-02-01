import "./Hub.css";
import { initContent } from "../../main";

export const Hub = () => {
    const main = document.querySelector("main");
    main.innerHTML = `
    <button class="button-logout">Logout</button>
    `
    logout();
}

const logout = () => {
    const inputLogout = document.querySelector(".button-logout");
    inputLogout.addEventListener("click", (ev) => {
        initContent("Login")
    })
}