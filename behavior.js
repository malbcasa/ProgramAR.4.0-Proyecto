import {show} from "./showinfo.js"

const formacionbtn = document.getElementsByClassName("areas-formacion")[0];
const expbtn = document.getElementsByClassName("areas-experiencia")[0];
const contactobtn = document.getElementsByClassName("areas-contacto")[0];


const data = fetch("./data.json").then(response => { return response.json()});

formacionbtn.addEventListener('click',() => {
    show(data,'formacion');
});

expbtn.addEventListener('click',() => {
    show(data,'exp');
});

contactobtn.addEventListener('click',() => {
    show(data,'contacto');
});