class ListItem {
    constructor() {
        this.text = '';
    }

    create() {
        let text = prompt("Enter text");
        text = text.trim();
        if (text != null && text !== '') {
            this.text = text;
            return true;
        }
        return false;
    }
}

export { ListItem as default }
