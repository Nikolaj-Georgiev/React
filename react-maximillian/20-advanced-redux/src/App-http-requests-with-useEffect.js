import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';

import { uiActions } from './store/ui-slice';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';


let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    const sendCartDate = async () => {

      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending..',
        message: 'Sending cart data!'
      }))

      const response = await fetch('https://redux-advanced-4dff8-default-rtdb.europe-west1.firebasedatabase.app/cart.json', { method: 'PUT', body: JSON.stringify(cart) });

      if (!response.ok) {
        throw new Error('Sending cart data failed');
      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      }));
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartDate().catch((error) => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }))
    })
  }, [cart, dispatch]);


  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
