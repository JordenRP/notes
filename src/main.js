import './sass/main.sass'
import store from './js/store/index.js'; 

// Load up components
import Form from './components/form/form.js';
import Label from './components/label/label.js';
import FormCard from './components/form-card/form-card.js';
import Card from './components/card/card.js';
import Head from './components/head/head.js';




// Instantiate components
const formInstance = new Form();
const labelInstance = new Label();
const cardInstance = new Card();
const formCardInstance = new FormCard();
const headInstance = new Head();




// Initial renders

store.events.publish('loaderMainPage', '');

window.history.replaceState ({'loaderMainPage': ''}, null, "");



window.onpopstate = event => {
    for (let key in event.state){
        store.events.publish(key, event.state[key]);
    }
}







