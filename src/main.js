import List from './List';


function init() {
    const listId = '#list'
    const addBtnId = '#add-item-btn';
    const delBtnId = '#delete-item-btn';

    var list = new List(listId);

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

