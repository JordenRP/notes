import './sass/main.sass'
import './components/card/card.js'
let template = require("./components/card/card.pug");

let locals = {
    name: ['Monday','Tuesday','Wednesday','Thursday']
}


document.querySelector('main').innerHTML = (template(locals))



