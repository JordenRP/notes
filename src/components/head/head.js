import Component from '../../js/lib/component.js';
import store from '../../js/store/index.js';
import tm from './head.pug';

export default class Head extends Component {
    
    constructor() {
        super();

        store.events.subscribe('openLabel', this.render, this)
    }

    render(name) {        
        this.title.insertAdjacentHTML('afterbegin',tm({name}))

        const head = document.querySelector('.head')

        head.addEventListener('click', this.handle.bind(this));
    }

    handle (e) {
        e.preventDefault ()

        store.events.publish('loaderMainPage', '');

        window.history.pushState ({'loaderMainPage': ''}, null, "");
    };
};
