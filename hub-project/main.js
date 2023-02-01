import './style.css';
import { Header } from './components/Header/Header';
import { changeColor } from './components/Button/Button';
import { Login } from './pages/Login/Login';


const header = document.querySelector("header");
header.innerHTML = Header();
changeColor();
Login();