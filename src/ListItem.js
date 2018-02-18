class ListItem {
    constructor(text) {
        this.text = text;
    }

    create() {
        let text = prompt("Enter text");
        if (null !== text && '' !== text) {
            text = text.trim();
            this.text = text;
            return true;
        }
        return false;
    }
}

export { ListItem as default }
