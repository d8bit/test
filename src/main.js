import List from './List';

function init(listId) {
    const list = new List(listId);
    const addButton = document.querySelector('#add-item-btn');
    const deleteButton = document.querySelector('#delete-item-btn');
    addButton.addEventListener('click', function() {
        const text = list.addItem();
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

init("#list");
