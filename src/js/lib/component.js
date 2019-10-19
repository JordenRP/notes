// We're importing the store Class here so we can test against it in the constructor
import Store from '../store/store.js';

export default class Component {
    constructor() {
        this.render = this.render || function() {};
        
        this.title = document.querySelector('.title');
        this.element = document.querySelector('.content')
    }
}
