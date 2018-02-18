import ListItem from './ListItem';
import State from './State';
import $ from 'jQuery';
import _ from 'underscore';

class List {

    constructor(id) {
        this.id = id;
        this.items = [];
        this.state = new State();
        const that = this;
        this.init(function() {
            if (null != sessionStorage.getItem('list')) {
                that.load();
            }
            that.render();
        });
    }

    load() {
        const session = JSON.parse(sessionStorage.getItem('list'));
        this.items = [];
        const that = this;
        session.items.forEach(function(item) {
            that.addItem(item.text);
        });
    }

    init(callback) {
        const that = this;
        $.getJSON("/restful/data.json", function(response) {
            if (response.status == "success") {
                response.data.forEach(function(item) {
                    that.addItem(item.text);
                });
                callback();
            } else {
                alert('Initial load failed');
            }
        });
    }

    addItem(item) {
        const newItem = new ListItem(item);
        this.state.addState(this.items);
        this.items.push(newItem);
    }

    createItem(item) {
        let listItem = new ListItem();
        if (listItem.create()) {
            this.state.addState(this.items);
            this.items.push(listItem);
            this.render();
        }
    }

    deleteItem(item) {
        this.items = _.reject(this.items, function(element) {
            return element.text === item.text;
        });
        this.state.removeState();
        this.render();
    }

    deleteItems() {
        var that = this;
        const items = document.querySelectorAll(this.id + ' option:checked');
        items.forEach(function (item) {
            that.items = _.reject(that.items, function(element) {
                return element.text === item.text;
            });
        });
        sessionStorage.setItem('list', this);
        this.render();
    }

    undo() {
        const state = this.state.removeState();
        if (state) {
            this.items = state;
            this.render();
        }
    }

    render() {
        sessionStorage.setItem('list', JSON.stringify(this));
        document.querySelector(this.id).innerHTML = "";
        let html = "";
        this.items.forEach(function(item) {
            html += "<option value=''>"+item.text+"</option>";
        });
        document.querySelector(this.id).innerHTML = html;
    }
}

export { List as default }
