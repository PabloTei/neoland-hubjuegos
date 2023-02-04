import './style.css';
import { Header } from './components/Header/Header';
import { changeColor } from './components/Button/Button';
import { Login } from './pages/Login/Login';
import { Hub } from './pages/Hub/Hub';
import { PokeApi } from './pages/PokeApi/PokeApi';
import { Footer } from './components/Footer/Footer';
import { RollDice } from './pages/RollDice/RollDice';


export const initContent = (route) => {
    switch (route) {
        case "Login":
            Login();
            break;
        case "Hub":
            Hub();
            break;
        case "PokeApi":
            PokeApi();
            break;
        case "RollDice":
            RollDice()
    }
}


const header = document.querySelector("header");
header.innerHTML = Header();

Footer();
changeColor();
initContent("Login");

