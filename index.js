class MenuItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    display() {
        console.log(`${this.name}: $${this.price}`);
    }
}

class Menu {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        console.log(`${item.name} added to the menu.`);
    }

    viewMenu() {
        if (this.items.length === 0) {
            console.log("The menu is empty.");
        } else {
            console.log("Menu:");
            this.items.forEach(item => {
                item.display();
            });
        }
    }

    removeItem(itemName) {
        const index = this.items.findIndex(item => item.name === itemName);
        if (index !== -1) {
            const removedItem = this.items.splice(index, 1)[0];
            console.log(`${removedItem.name} removed from the menu.`);
        } else {
            console.log(`${itemName} not found in the menu.`);
        }
    }
}

// Example usage
const menu = new Menu();

const item1 = new MenuItem("Burger", 8.99);
const item2 = new MenuItem("Pizza", 12.99);

menu.addItem(item1);
menu.addItem(item2);

menu.viewMenu();

menu.removeItem("Burger");

menu.viewMenu();
