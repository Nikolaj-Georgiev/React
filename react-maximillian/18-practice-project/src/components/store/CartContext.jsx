import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
}); // setting a default value gives us better autocompletion!

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    //update the state to add a meal item...
    const existingCartItemsIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemsIndex > -1) {
      const existingItem = state.items[existingCartItemsIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemsIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === 'REMOVE_ITEM') {
    // remove item from the state
  }

  return state;
} // state and action are passed automatically by React! The goal of this fn is to return updated state.

export function CartContextProvider({ children }) {
  useReducer(createContext, { items: [] });

  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
