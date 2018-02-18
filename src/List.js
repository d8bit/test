import ListItem from './ListItem';

class List {

    constructor(listId) {
        this.listId = listId;
        this.items = [];
    }

    addItem(item) {
        let listItem = new ListItem();
        listItem.create();
        this.items.push(listItem);
        this.render();
    }

    deleteItem(item) {

    }

    render() {
        document.querySelector(this.listId).innerHTML = "";
        let html = "";
        this.items.forEach(function(item) {
            html += "<option value=''>"+item.text+"</option>";
        });
        document.querySelector(this.listId).innerHTML = html;
    }
}

export { List as default }
