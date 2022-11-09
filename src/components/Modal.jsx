import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const handleDeleteAll = () => {
    // clear all
    dispatch(clearCart());
    // then close the modal
    dispatch(closeModal());
  } 

  return (
    <div className="modal-container">
      <div className="modal">
        <h4>Remove all your items in your shopping cart?</h4>
        <div className="btn-container">
          <button onClick={handleDeleteAll} type="button" className="btn confirm-btn">
            Confirm
          </button>
          <button onClick={() => dispatch(closeModal())} type="button" className="btn cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal;