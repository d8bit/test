import ListItem from './ListItem';
import _ from 'underscore';

class List {

    constructor(id) {
        this.id = id;
        this.items = [];
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
