import ListItem from './ListItem';

class List {

    constructor(domId) {
        this.domId = domId;
        this.items = [];
    }

    addItem(item) {
        let listItem = new ListItem();
        listItem.create();
        this.items.push(listItem);
        this.render();
    }

    render() {
        document.querySelector(this.domId).innerHTML = "";
        let html = "";
        this.items.forEach(function(item) {
            html += "<option value=''>"+item.text+"</option>";
        });
        document.querySelector(this.domId).innerHTML = html;
    }
}

export { List as default }
