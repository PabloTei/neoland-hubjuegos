import "./Button.css";

export const buttonColorMode = () => `
<button class="my-btn">
<img src="https://res.cloudinary.com/depifliz3/image/upload/v1675382302/samples/ecommerce/pokeball_q5zuqh.png" alt ="boton-arcoiris"
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

