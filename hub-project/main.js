import './style.css';
import { Header } from './components/Header/Header';
import { changeColor } from './components/Button/Button';


const header = document.querySelector("header");
header.innerHTML = Header();
changeColor();
