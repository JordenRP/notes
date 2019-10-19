import Component from '../../js/lib/component.js';
import store from '../../js/store/index.js';
import tm from './form.pug';
import toggle from '../../js/lib/toggle.js';

export default class From extends Component {
    
    // Pass our store instance and the HTML element up to the parent Component
    constructor() {
        super();

        store.events.subscribe('loaderMainPage', this.render, this);

        this.storage = store.state['names']
    }

    render() {

        this.element.innerHTML = '' 
        this.title.innerHTML = '' 
        this.element.insertAdjacentHTML('afterbegin', tm())

        const new_label_dashboards = document.querySelector('.new-label') 
        const form_ldb = document.querySelector('.form__container')

        const toggleForm = toggle(new_label_dashboards, form_ldb)
        
        this.element.querySelectorAll('.toggle').forEach((item) => {
            item.addEventListener("click", toggleForm)
        })

        const button_create = document.querySelector('.form__button_create')
        const button_cancel = document.querySelector('.form__button_cancel')
        const input = document.querySelector('.form__input')

        button_create.addEventListener('click', this.handle.bind(this));
        input.addEventListener('keydown', (e) =>{
            if (e.keyCode === 13 && input.value != ''){
                this.handle()
                toggleForm()
            }
        });
        button_cancel.addEventListener('click', ()=> input.value = '');
    }

    handle() {
        const input = document.querySelector('.form__input')
        const payload = input.value;

        store.dispatch('addLabel', payload, this.storage);

        input.value = ''
    }
};
