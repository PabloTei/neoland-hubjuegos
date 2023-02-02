import "./Button.css";

export const buttonColorMode = () => `
<button class="my-btn">
<img src="https://res.cloudinary.com/depifliz3/image/upload/v1675327380/samples/ecommerce/arco-iris_u7m5gd.png" alt ="boton-arcoiris"
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

