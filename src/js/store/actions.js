export default {
    addCard(context, payload, storage) {
        context.commit('addCard', payload, storage);
        context.events.publish('cardChange', payload)
    },
    addLabel(context, payload, storage) {
        context.commit('addLabel', payload, storage);
        context.events.publish('stateChange', [payload])
    },
    addTask(context, payload, storage) {
        context.commit('addTask', payload, storage);
    }
};
