import Component from '../../js/lib/component.js';
import store from '../../js/store/index.js';
import tm from './form-card.pug';
import toggle from '../../js/lib/toggle.js';

export default class FromCard extends Component {
    
    
    constructor() {
        super();

        store.events.subscribe('openLabel', this.render, this);

        this.storage = store.state['names'];
    }


    render(nameLabel) {
       
        this.element.insertAdjacentHTML('beforeend',tm())

        const btn = document.querySelector('.button');
        const new_card = document.querySelector('.new-card');
        const input = document.querySelector('.new-card__input');

        let toggleFormCard = toggle(btn, new_card);

        this.element.querySelectorAll('.toggle').forEach((item) => {
            item.addEventListener("click", toggleFormCard)
        });

        input.addEventListener('keydown',  (e) => {
            if (e.keyCode === 13 && input.value != '') {
                const payload = input.value;
                input.value = ''

                store.dispatch('addCard', payload, this.storage[nameLabel]);

                toggleFormCard();
            }
        });
    }
};
