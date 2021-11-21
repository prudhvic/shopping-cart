import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Nav = () => {
  let totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <header>
      <h1>Shoe Shop</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">shoes</Link>
          </li>
          <li>
            <Link to="/cart">
              My Cart <span className="total-qty">{totalQuantity}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
