import React from "react";
import ShoeItem from "./ShoeItem";
const ShoppingList = () => {
  let shoppingList = {
    items: [
      {
        imgUrl: "/images/shoes1.jpg",
        name: "Nike Air ",
        price: 820,
        id: "s1",
      },
      {
        imgUrl: "/images/shoes2.jpg",
        name: "Nike magic",
        price: 660,
        id: "s2",
      },
      {
        imgUrl: "/images/shoes3.jpg",
        name: "Nike wonder",
        price: 560,
        id: "s3",
      },
      {
        imgUrl: "/images/shoes4.jpg",
        name: "Nike power",
        price: 345,
        id: "s4",
      },
      {
        imgUrl: "/images/shoes5.jpg",
        name: "Nike style",
        price: 890,
        id: "s5",
      },
      {
        imgUrl: "/images/shoes6.jpg",
        name: "Nike moment",
        price: 2000,
        id: "s6",
      },
    ],
  };

  return (
    <main>
      <section className="shopList">
        {shoppingList.items.map((shoe) => (
          <ShoeItem key={shoe.id} shoe={shoe} />
        ))}
      </section>
    </main>
  );
};

export default ShoppingList;
