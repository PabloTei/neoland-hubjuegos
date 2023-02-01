import "./Button.css";

export const buttonColorMode = () => `
<button class="my-btn">
<h4>Cambiar color</h4>
</button>
`

export const changeColor = () => {
    const button = document.querySelector("button");
    button.addEventListener("click", (event) => {
        let newColor = colorRGB();
        document.body.style.backgroundColor = newColor;
    })
}

const generarNumero = (numero) => {
    return (Math.random()*numero).toFixed(0);
}

const colorRGB = () => {
    let color = `rgb(${generarNumero(255)},${generarNumero(255)},${generarNumero(255)})`
    return color;
}

