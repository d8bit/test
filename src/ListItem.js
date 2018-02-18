class ListItem {
    constructor() {
        this.text = '';
    }

    create() {
        const text = prompt("Text");
        if (text != null) {
            this.text = text;
            return true;
        }
        return false;
    }
}

export { ListItem as default }
