import List from './List';

function init() {
    const list = new List("#list");
    const addButton = document.querySelector('#add-item-btn');
    const deleteButton = document.querySelector('#delete-item-btn');
    addButton.addEventListener('click', function() {
        const text = list.addItem();
    });

    deleteButton.addEventListener('click', function() {
        console.log('delete');
    });
}

init();
