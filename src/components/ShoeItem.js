import React from "react";
import {useDispatch} from "react-redux"
import {cartActions} from "../store/cartSlice"
const ShoeItem = ({ shoe }) => {
  let dispatch=useDispatch()
 let AddToCart=()=>{
   dispatch(cartActions.addItemToCart({imgUrl:shoe.imgUrl,name:shoe.name,price:shoe.price,id:shoe.id}))
 }
  return (
    <div className="card">
      <div className="shoe">
        <div className="img-shoe">
          <img src={shoe.imgUrl} alt={shoe.name} />
        </div>
        <div className="shoe-details">
          <h2>{shoe.name}</h2>
          <p>Mens shoes Farsley cheslsa black</p>
        </div>
        <h3 className="shoe-price">{shoe.price}RS</h3>
        <div>
          <button className="add-btn" onClick={AddToCart}>
            Add To cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoeItem;
