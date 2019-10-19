import Component from '../../js/lib/component.js';
import store from '../../js/store/index.js';
import tm from './label.pug';

export default class Label extends Component {
    
    constructor() {
        super();

        store.events.subscribe('stateChange', this.createNewLabel, this)
        store.events.subscribe('loaderMainPage', this.render, this);
    }

    render() {

        let names = Object.keys(store.state['names'])
        
        this.element.insertAdjacentHTML('beforeend',tm({names}))

        this.element.querySelectorAll('a').forEach(a=> {
            a.addEventListener('click', this.handle);
        });
    }

    handle (e) {
        e.preventDefault ()

        const name = e.target.closest('a').firstChild.innerText
        store.events.publish('openLabel', name);

        const page = {'openLabel': name}

        window.history.pushState ({'openLabel': name}, null, "");
    };

    createNewLabel (names) {
        this.element.insertAdjacentHTML('beforeend',tm({names}))

        this.element.querySelectorAll('a').forEach(a=> {
            a.addEventListener('click', this.handle);
        });
    }
};
