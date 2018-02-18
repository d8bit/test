import ListItem from './ListItem';
import $ from 'jQuery';
import _ from 'underscore';

class List {

    constructor(id) {
        this.id = id;
        this.items = [];
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
            that.addItem(item);
        });
    }

    init(callback) {
        const that = this;
        $.getJSON("/restful/data.json", function(response) {
            if (response.status == "success") {
                response.data.forEach(function(item) {
                    that.items.push(item);
                });
                callback();
            } else {
                alert('Initial load failed');
            }
        });
    }

    addItem(item) {
        this.items.push(item);
    }

    createItem(item) {
        let listItem = new ListItem();
        if (listItem.create()) {
            this.items.push(listItem);
            this.render();
        }
    }

    deleteItem(item) {
        this.items = _.reject(this.items, function(element) {
            return element.text === item.text;
        });
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
