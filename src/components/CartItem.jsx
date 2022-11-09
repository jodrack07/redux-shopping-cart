import { useDispatch } from 'react-redux';
import {
  removeItem,
  increaseAmount,
  decreaseAmount,
} from '../features/cart/cartSlice';
import { ChevronDown, ChevronUp } from '../icons';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className='item'>
      <div className='item-details'>
        <img src={img} alt={title} />
        <div className='item-desc'>
          <h4 className='title'>{title}</h4>
          <p className='price'>$ {price}</p>
          <button onClick={() => dispatch(removeItem(id))} className="remove-item">remove</button>
        </div>
      </div>
      <div className='change-qty-actions'>
        <button
          className='amount-btn'
          onClick={() => dispatch(increaseAmount({ id }))}
        >
          <ChevronUp />
        </button>
        <p>{amount}</p>
        <button
          className='amount-btn'
          onClick={() => {
            if(amount === 1) {
                dispatch(removeItem(id));
                // we return so prevent the script to execute the rest of the code
                return;
            }
            dispatch(decreaseAmount({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
