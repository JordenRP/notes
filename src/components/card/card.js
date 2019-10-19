import Component from '../../js/lib/component.js';
import store from '../../js/store/index.js';
import tm from './card.pug';
import tmTask from './task/task.pug'

export default class Card extends Component {
    
    constructor() {
        super();

        store.events.subscribe('openLabel', this.render, this);
        store.events.subscribe('cardChange', this.createNewCard, this);

        this.storage = store.state
    }
    
    render(nameLable) {
        this.element.innerHTML = ''

        this.storage = store.state['names'][nameLable]
        
        this.storage.forEach((item) => {
            for (let title in item) {
                let tasks = item[title]

                this.element.insertAdjacentHTML('beforeend', tm({title}))

                if(tasks.length){
                    this.element.lastChild.querySelector('ul').innerHTML = tmTask({tasks})
                }
            }
        })

        const addTask = this.handle(this.storage)

        this.element.querySelectorAll('.card').forEach((item)=>{
            const input = item.querySelector('.card__input')
            input.addEventListener('keydown', addTask)
        })
        
        
    }

    handle (storage) {
        return (e) => {
            const input = e.target
            if (e.keyCode === 13 && input.value != '') {
                const task = input.value
                const card = e.target.parentNode
                const title = card.querySelector('.card__head').innerText.toLowerCase()

                const cardStorage = storage.filter(item => { 
                    if(item[title]) {
                        return item
                    }
                })[0];

                store.dispatch('addTask', task, cardStorage[title]);
                card.querySelector('.card__list').insertAdjacentHTML('beforebegin', tmTask({task}));
                input.value = '';
            }
        }   
    };

    createNewCard (title) {
        const formCard = document.querySelector('.button')
        formCard.insertAdjacentHTML('beforebegin',tm({title}))

        const addTask = this.handle(this.storage)

        this.element.querySelectorAll('.card').forEach((item)=>{
            const input = item.querySelector('.card__input')
            input.addEventListener('keydown', addTask)
        })
    }
};
