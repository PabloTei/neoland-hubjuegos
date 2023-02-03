import "./Footer.css";
import { initContent } from "../../main";
import { PokeApi } from "../../pages/PokeApi/PokeApi";

export const Footer = () => {
    const myFooter = document.querySelector("footer");
    myFooter.innerHTML = `
    <div class="button-log">
    <button class="anterior-page"><-</button>
    <button class="button-logout">Logout</button>
    </div>
    `
    logout();
    anteriorPage();
}

const logout = () => {
    const inputLogout = document.querySelector(".button-logout");
    inputLogout.addEventListener("click", (ev) => {
        localStorage.removeItem("user");
        initContent("Login");
    })
}

const anteriorPage = () => {
    const myBtnAntPage = document.querySelector (".anterior-page");
    myBtnAntPage.addEventListener("click", () => {
        initContent("Hub");

    })
}