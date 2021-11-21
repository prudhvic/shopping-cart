import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const Cart = ({ shoe }) => {
  const dispatch = useDispatch();
  let addItem = () => {
    dispatch(
      cartActions.addItemToCart({
        name: shoe.name,
        id: shoe.id,
        imgUrl: shoe.imgUrl,
        price: shoe.price,
      })
    );
  };
  let removeItem = () => {
    dispatch(cartActions.removeItemFromCart(shoe.id));
  };
  let removeEntire = () => {
    dispatch(
      cartActions.removeFromCart({
        totalQuantity: shoe.qty,
        id: shoe.id,
      })
    );
  };
  return (
    <div className="card cart-card">
      <div className="shoe">
        <div className="img-shoe">
          <img src={shoe.imgUrl} alt={shoe.name} />
        </div>
        <div className="shoe-details">
          <h2>{shoe.name}</h2>
          <p>Mens shoes Farsley cheslsa black</p>
        </div>
        <div className="actions">
          <button onClick={removeItem}>-</button>
          <h3>{shoe.qty}</h3>
          <button onClick={addItem}>+</button>
        </div>
        <div className="total">Total:{shoe.totalPrice}Rs</div>
        <div className="actions remove">
          <button onClick={removeEntire}>Remove item</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
