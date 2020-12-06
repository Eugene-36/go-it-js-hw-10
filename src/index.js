import css from "./css/styles.css";
import menu from "./data/menu.json"
import ref from "./js/refs.js"
import cardsTemplate from "../src/templates/post.hbs"


// Сделал шаблон 
const newCard = cardsTemplate(menu);
const containerRef = document.querySelector('.menu')
containerRef.insertAdjacentHTML('afterbegin', newCard)


