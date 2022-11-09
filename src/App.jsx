import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import './App.css';
import CartContainer from './components/CartContainer';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import Modal from './components/Modal';
import IsLoading from './components/IsLoading';

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch])

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  if(isLoading) {
    return <IsLoading />
  }

  return (
    <main>
      { isOpen && <Modal /> }
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
