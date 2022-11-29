import React, { useState, useEffect } from "react";
import "./Cart.css";
import { useContext } from "react";
import Context from "./ContextCart";
import { SiSamsungpay } from "react-icons/si";
import { CgPaypal } from "react-icons/cg";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
function Cart({ cart, setCart, handleChange }) {
  const [amt, setAmt] = useState(0);
  const [pay, setPay] = useState(false);
  const { decreCart } = useContext(Context);
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
    decreCart(1);
  };
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price || item.price));
    setAmt(ans);
  };
  useEffect(() => {
    handlePrice();
  });
  return (
    <div>
      {cart.map((item) => (
        <div key={item.id} className="cart" onClick={() => setPay(false)}>
          <div className="product">
            <img
              src={item.image}
              alt="img"
              style={{ height: "100px", width: "100px" }}
            />
            <p className="title">{item.title}</p>
          </div>
          <div className="any">
            <button
              onClick={() => handleChange(item, 1)}
              className="action plus"
            >
              +
            </button>
            <button className="action">{item.amount || 1}</button>
            <button
              onClick={() => handleChange(item, -1)}
              className="action minus"
            >
              -
            </button>
          </div>
          <h6 className="price">{item.price}</h6>
          <button onClick={() => handleRemove(item.id)} className="remove">
            Remove
          </button>
        </div>
      ))}
      <div>
        <p className="total">
          Total price of Your Cart{" "}
          <h3 className="value"> {Math.round(amt) || 0} $</h3>
          <button
            className="check"
            onClick={() => {
              setPay(true);
            }}
          >
            Pay
            <button className="gp">
              <SiSamsungpay />
            </button>
            <button className="gp">
              <CgPaypal />
            </button>
            <button className="gp">
              <AiOutlineCreditCard />
            </button>
            <button className="gp">
              <BsCashCoin />
            </button>
          </button>
        </p>
        {pay ? (
          <div className="total">
            Shopify has accepted your order and payment of{" "}
            {Math.round(amt) || 0} $ is recieved.You will recieve your order
            within 7 working days or sooner...Happy Shopping!
            <button className="cross" onClick={() => window.location.reload()}>
              ❌
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Cart;
