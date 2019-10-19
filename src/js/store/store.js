import PubSub from '../lib/pubsub.js';

export default class Store {
    constructor(params) {
        let self = this;

        self.actions = {};
        self.mutations = {};
        self.state = {};

        self.events = new PubSub();

        if(params.hasOwnProperty('actions')) {
            self.actions = params.actions;
        }
        
        if(params.hasOwnProperty('mutations')) {
            self.mutations = params.mutations;
        }

        self.state = params.state; 
    }


    dispatch(actionKey, payload, storage) {
  
        let self = this;

        if(typeof self.actions[actionKey] !== 'function') {
          console.error(`Action "${actionKey} doesn't exist.`);
          return false;
        }
        
        console.groupCollapsed(`ACTION: ${actionKey}`);

     
        self.actions[actionKey](self, payload, storage);
        
        console.groupEnd();

        return true;
    }

    commit(mutationKey, payload, storage) {
        let self = this;
        
        if(typeof self.mutations[mutationKey] !== 'function') {
            console.log(`Mutation "${mutationKey}" doesn't exist`);
            return false;
        }

        self.mutations[mutationKey](storage, payload);

        console.log(self.state)

        return true;
    }
}
