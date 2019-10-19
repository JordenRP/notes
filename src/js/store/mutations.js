export default {
    addCard(storage, payload) {
        storage.push({});
        storage[storage.length-1][payload] = []; 
    },
    addLabel(storage, payload) {
        storage[payload] = [];
    },
    addTask(storage, payload) {
        storage.push(payload);
    }
};
