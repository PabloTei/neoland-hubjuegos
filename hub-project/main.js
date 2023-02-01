import './style.css';
import { Header } from './components/Header/Header';
import { changeColor } from './components/Button/Button';
import { Login } from './pages/Login/Login';
import { Hub } from './pages/Hub/Hub';


export const initContent = (route) => {
    switch (route) {
        case "Login":
            Login();
            break;
        case "Hub":
            Hub();
            break;
    }
}


const header = document.querySelector("header");
header.innerHTML = Header();
changeColor();
initContent("Login")

