import List from './List';

function init() {
    const list = new List("#list");
    let addButton = document.querySelector('#add-item-btn');
    addButton.addEventListener('click', function() {
        const text = list.addItem();
    });
}

init();
