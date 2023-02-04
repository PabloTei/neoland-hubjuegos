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
    <p class="resultado">/resultado/</p>
    <button class="roll">¡ROLL DICE!</button>
    </div>
    </div>
    `

    btnRollDice();
}

const getRandomNumber = () => {
    const jugador = Math.floor(Math.random() * (6 - 1) + 1);
    const maquina = Math.floor(Math.random() * (6 - 1) + 1);
    const dadoUser = document.querySelector(".jugador-uno");
    const dadoMaquina = document.querySelector(".jugador-dos");
    const resultado = document.querySelector(".resultado");
    dadoUser.innerHTML = `
    ${jugador}
    `
    dadoMaquina.innerHTML = `
    ${maquina}
    `
    if (jugador > maquina) {
        resultado.innerHTML = `
        ${localStorage.getItem("user").toUpperCase()} ha ganado.
        `
    } else if (jugador < maquina) {
        resultado.innerHTML = `
        Máquina ha ganado.
        `
    } else {
        resultado.innerHTML = `
        Habéis empatado.
        `
    }
}

const btnRollDice = () => {
    const buttonRollDice = document.querySelector(".roll");
    buttonRollDice.addEventListener("click", () => {
        getRandomNumber();
    })
}


