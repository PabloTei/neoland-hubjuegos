import "./Login.css";
import { initContent } from "../../main";


export const Login = () => {
    const main = document.querySelector("main");
    main.innerHTML = `
    <section class="login">
    <div class="text">
    <h1>NEOLAND</h1>
    <h1>HUB-GAMES</h1>
    </div>
    <input type="text" class="input-login" placeholder="Introduce tu nombre">
    <button type="submit" class="button-login">Login</button>
    </section>
    `
    userRegister();
}

const userRegister = () => {
    const inputLogin = document.querySelector(".input-login");
    document.querySelector(".button-login").addEventListener("click", (ev) => {
        localStorage.setItem("user", inputLogin.value);
        if (inputLogin.value != "") {
            initContent("Hub")
        } else {
            alert("Porfavor, introduce un nombre")
        }
        
    })
}

