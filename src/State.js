import _ from 'underscore';

class State {

    constructor() {
        this.history = [];
    }

    addState(state) {
        const newState = _.clone(state);
        this.history.push(newState);
    }

    removeState() {
        if (this.history.length > 0) {
            const value = this.history.pop();
            return value;
        }
        return [];
    }
}

export { State as default }
