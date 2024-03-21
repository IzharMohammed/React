import { createStore } from "redux";

function demoReducer(state, action) {
    if (action.type == 'add_item') {
        return [...state, { name: action.itemName, quantity: action.itemQuantity }]
    }
    return state;
}

const initialState = [{ name: 'apple' }, { name: 'rice' }];
    //(demoReducer , initialstate) --> createStore ---> store(object)
const store = createStore(demoReducer, initialState);

console.log(store);

console.log(store.getState());

const add_item = (name, quantity) => ({
    type: 'add_item',
    itemName: name,
    itemQuantity: (quantity) ? quantity : 1
})

store.dispatch(add_item('banana', 5))
store.dispatch(add_item('sapota'))

console.log(store.getState());

