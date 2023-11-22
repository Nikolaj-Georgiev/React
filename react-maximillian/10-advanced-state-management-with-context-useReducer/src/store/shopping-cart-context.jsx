import { createContext } from 'react';

export const CartContext = createContext({
  items: [], //setting the default value here can make my life as a developer easier, since this gives me autocompletion suggestions
});
