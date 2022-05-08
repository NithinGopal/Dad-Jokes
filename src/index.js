// import {v4 as uuidv4} from 'uuid';  //? removed after trail

import generateJoke from "./generateJoke";   //? jokes api
import './styles/main.scss';                 //? style sheet
//import drums from './assets/drum.png';         //? to add an image


//const drumImg = document.getElementById('drumImg');
//drumImg.src = drums;
const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener ('click', generateJoke);
generateJoke();
//console.log(generateJoke());
//console.log(1);

// console.log(uuidv4())  //? removed after trail