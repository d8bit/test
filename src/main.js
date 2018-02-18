import List from './List';


function init() {
    const listId = '#list'
    const addBtnId = '#add-item-btn';
    const delBtnId = '#delete-item-btn';
    const undoBtnId = '#undo-btn';

    var list = new List(listId);

    const addButton = document.querySelector(addBtnId);
    const deleteButton = document.querySelector(delBtnId);
    const undoButton = document.querySelector(undoBtnId);
    addButton.addEventListener('click', function() {
        const text = list.createItem();
    });

    deleteButton.addEventListener('click', function() {
        list.deleteItems();
    });

    undoButton.addEventListener('click', function() {
        list.undo();
    });

    document.querySelector(listId).addEventListener('dblclick', function(event) {
        if (event.target.localName === 'option') {
            list.deleteItem(event.target);
        }
    });

}

init();

