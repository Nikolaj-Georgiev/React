import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, description, id } = props;

  const handleAddToCart = () => {
    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;



/*
this code is just to showcase how you can do the data manipulation outside of the reducer and not mutate the code directly.
import { useSelector } from 'react-redux';

  const cart = useSelector(state => state.cart)


const handleAddToCart = () => {
  
      const newTotalQuantity = cart.totalQuantity + 1;
  
      const updatedItems = cart.items.slice(); // create copy via slice to avoid mutating original state
      const existingItem = updatedItems.find(item => item.id === id);
      if (existingItem) {
        const updatedItem = { ...existingItem }; // new object + copy existing properties to avoid state mutation
        updatedItem.quantity++;
        updatedItem.totalPrice = updatedItem.totalPrice + price;
        const existingItemIndex = updatedItems.findIndex(item => item.id === id);
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems.push({
          id: id,
          price: price,
          quantity: 1,
          totalPrice: price,
          name: title,
        });
      }
  
      const newCart = {
        totalQuantity: newTotalQuantity,
        items: updatedItems,
      };
  
  
      dispatch(cartActions.replaceCart(newCart))
    }    
  */