import "./Footer.css";
import { initContent } from "../../main";

export const Footer = () => {
    const myFooter = document.querySelector("footer");
    myFooter.innerHTML = `
    <div class="button-log">
    <button class="button-logout">Logout</button>
    </div>
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