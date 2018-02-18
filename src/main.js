import List from './List';

function load() {
    const session = JSON.parse(sessionStorage.getItem('list'));
    const list = new List(session.id);
    session.items.forEach(function(item) {
        list.addItem(item);
    });
    return list;
}

function init() {
    const listId = '#list'
    const addBtnId = '#add-item-btn';
    const delBtnId = '#delete-item-btn';

    if (null != sessionStorage.getItem('list')) {
        var list = load();
        list.render();
    } else {
        var list = new List(listId);
    }

    const addButton = document.querySelector(addBtnId);
    const deleteButton = document.querySelector(delBtnId);
    addButton.addEventListener('click', function() {
        const text = list.createItem();
    });

    deleteButton.addEventListener('click', function() {
        list.deleteItems();
    });

    document.querySelector(listId).addEventListener('dblclick', function(event) {
        console.log();
        if (event.target.localName === 'option') {
            list.deleteItem(event.target);
        }
    });


}

init();
