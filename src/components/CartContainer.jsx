import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { openModal } from '../features/modal/modalSlice';

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <section className='cart'>
      <header>
        <h2>Your cart</h2>
      </header>
      {amount < 1 ? (
        <EmptyCart />
      ) : (
        <article className="fulfiled-items">
          <div className='cart-container'>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} {...cartItem} />
            ))}
          </div>
          <footer>
            <hr />
            <div className='total-amount'>
              <p>Totoal</p>
              <p>$ {total}</p>
            </div>
            <button onClick={() => dispatch(openModal())}>clear all items</button>
          </footer>
        </article>
      )}
    </section>
  );
};

export default CartContainer;
