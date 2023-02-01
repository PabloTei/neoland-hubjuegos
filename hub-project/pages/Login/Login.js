import "./Login.css";

export const Login = () => {
    const main = document.querySelector("main");
    main.innerHTML = `
    <section class="login">
    <h1>NEOLAND</h1>
    <h1>HUB-GAMES</h1>
    <input class="input-login">
    <button class="button-login">Login</button>
    </section>
    `
}