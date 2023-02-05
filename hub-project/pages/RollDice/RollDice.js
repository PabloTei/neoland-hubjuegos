import "./RollDice.css";

export const RollDice = () => {
    const main = document.querySelector("main");
    main.innerHTML = `
    <div class="general">
    <div class="jugador-uno">
    <h3>${localStorage.getItem("user").toUpperCase()}</h3>
    <div class="dado-uno">
    <div class="prueba1">
    </div>
    </div>
    </div>
    <div class="jugador-dos">
    <h3>MAQUINA</h3>
    <div class="dado-dos">
    <div class="prueba2"></div>
    </div>
    </div>
    <div class="boton-resultado">
    <p class="resultado"></p>
    <button class="roll"><img src="https://res.cloudinary.com/depifliz3/image/upload/v1675559330/samples/Dice/dice_gqa8u9.png"></button>
    </div>
    </div>
    `

    btnRollDice();
}

const getRandomNumber = () => {
    const jugador = Math.floor(Math.random() * (6 - 1) + 1);
    const maquina = Math.floor(Math.random() * (6 - 1) + 1);
    const dadoUser = document.querySelector(".prueba1");
    const dadoMaquina = document.querySelector(".prueba2");
    const resultado = document.querySelector(".resultado");

        switch (jugador) {
            case 1:
                dadoUser.innerHTML = `
                <img src="https://res.cloudinary.com/depifliz3/image/upload/v1675554326/samples/Dice/dado_xdlpnk.png"/>
            `
            break;
            case 2:
                dadoUser.innerHTML = `
                <img src="https://res.cloudinary.com/depifliz3/image/upload/v1675554304/samples/Dice/dado_1_y0pbil.png"/>
            `
            break;
            case 3:
                dadoUser.innerHTML = `
                <img src="https://res.cloudinary.com/depifliz3/image/upload/v1675554307/samples/Dice/dado_2_yfstoy.png"/>
            `
            break;
            case 4:
                dadoUser.innerHTML = `
                <img src="https://res.cloudinary.com/depifliz3/image/upload/v1675554309/samples/Dice/dado_3_tqzvmm.png"/>
            `
            break;
            case 5:
                dadoUser.innerHTML = `
                <img src="https://res.cloudinary.com/depifliz3/image/upload/v1675554311/samples/Dice/dado_4_hrt96s.png"/>
            `
            break;
            case 6:
                dadoUser.innerHTML = `
                <img src="https://res.cloudinary.com/depifliz3/image/upload/v1675554314/samples/Dice/dado_5_zlxhwj.png"/>
            `
            break;
        }

        switch (maquina) {
            case 1:
                dadoMaquina.innerHTML = `
                <img src="https://res.cloudinary.com/depifliz3/image/upload/v1675554326/samples/Dice/dado_xdlpnk.png"/>
            `
            break;
            case 2:
                dadoMaquina.innerHTML = `
                <img src="https://res.cloudinary.com/depifliz3/image/upload/v1675554304/samples/Dice/dado_1_y0pbil.png"/>
            `
            break;
            case 3:
                dadoMaquina.innerHTML = `
                <img src="https://res.cloudinary.com/depifliz3/image/upload/v1675554307/samples/Dice/dado_2_yfstoy.png"/>
            `
            break;
            case 4:
                dadoMaquina.innerHTML = `
                <img src="https://res.cloudinary.com/depifliz3/image/upload/v1675554309/samples/Dice/dado_3_tqzvmm.png"/>
            `
            break;
            case 5:
                dadoMaquina.innerHTML = `
                <img src="https://res.cloudinary.com/depifliz3/image/upload/v1675554311/samples/Dice/dado_4_hrt96s.png"/>
            `
            break;
            case 6:
                dadoMaquina.innerHTML = `
                <img src="https://res.cloudinary.com/depifliz3/image/upload/v1675554314/samples/Dice/dado_5_zlxhwj.png"/>
            `
            break;
        }

    if (jugador > maquina) {
        resultado.innerHTML = `
        ${localStorage.getItem("user").toUpperCase()}, has ganado.
        `
    } else if (jugador < maquina) {
        resultado.innerHTML = `
        ${localStorage.getItem("user").toUpperCase()}, has perdido.
        `
    } else {
        resultado.innerHTML = `
        ${localStorage.getItem("user").toUpperCase()}, has empatado.
        `
    }
}

const btnRollDice = () => {
    const buttonRollDice = document.querySelector(".roll");
    buttonRollDice.addEventListener("click", () => {
        getRandomNumber();
    })
}


