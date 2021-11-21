import React from "react";
import Cart from "./Cart";
import { useSelector } from "react-redux";
const CartList = () => {
  let items = useSelector((state) => state.cart.items);

  return (
    <main>
      <section className="shopList">
        {items.map((shoe) => (
          <Cart key={shoe.id} shoe={shoe} />
        ))}
      </section>
    </main>
  );
};

export default CartList;
