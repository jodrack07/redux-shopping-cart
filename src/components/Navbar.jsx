import { useSelector } from 'react-redux';
import { CartIcon } from '../icons';

export default function Navbar() {
  const amount = useSelector((state) => state.cart.amount);
  return (
    <nav>
      <div className='center-navbar'>
        <h3>Cart in Redux</h3>
        <div className='nav-cart-container'>
          <CartIcon />
          <div className='amount-container'>
            <div className='total-amount'>{amount}</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
