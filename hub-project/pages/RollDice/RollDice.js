import "./RollDice.css";

export const RollDice = () => {
    const main = document.querySelector("main");
    main.innerHTML = `
    <div class="general">
    <div class="jugador-uno">
    <h3>${localStorage.getItem("user").toUpperCase()}</h3>
    <div class="dado-uno"></div>
    </div>
    <div class="jugador-dos">
    <h3>MAQUINA</h3>
    <div class="dado-dos"></div>
    </div>
    <div class="boton-resultado">
    <p>/resultado/</p>
    <button class="roll">¡ROLL DICE!</button>
    </div>
    </div>
    `
}

