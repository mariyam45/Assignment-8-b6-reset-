import { useEffect, useState } from "react";
import Blog from "../Blog";
import Card from "../card/Card";
import Sidebar from "../sideber/Sidebar";
import "./Body.css";
// import React from "./react";
const Body = () => {
  const [cards, setCards] = useState([]);
  const [cart, setCart] = useState([]);
  const [mark, setMark] = useState(0);

  useEffect(() => {
    fetch("info.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const handleAddToCart = (card) => {
    setCart([...cart, card]);
  };
  const markAsRead = (number, card) => {
    setMark((prev) => prev + parseInt(number));
    const newCart = [...cart, card];
    setCart(newCart);
  };

  return (
    <div className="mb-8">
      <div className="body-container mb-8">
        <div className="cards-container">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              handleAddToCart={handleAddToCart}
              markAsRead={markAsRead}
            ></Card>
          ))}
        </div>

        <div className="sideber-container ms-8 relative">
          <Sidebar mark={mark} cart={cart}></Sidebar>
        </div>
      </div>

      <Blog className=""></Blog>
    </div>
  );
};

export default Body;
