import { v4 as uuidv4 } from "uuid";


function itemReducer(shoppingItems, action) {
    if (action.type == 'add_item') {
        return [
            ...shoppingItems,
            { id: uuidv4(), name: action.itemName, quantity: 1 },
        ];
    } else if (action.type == 'increment_item') {
        let newShoppingList = shoppingItems.map((item) => {
            if (item.id === action.itemId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        return newShoppingList;
    } else if (action.type == 'decrement_item') {
        let updatedShoppingList = shoppingItems.map((item) => {
            if (item.id === action.itemId) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item;
        });

        updatedShoppingList = updatedShoppingList.filter((item) => item.quantity > 0)
        return updatedShoppingList
    }
}

export default itemReducer;