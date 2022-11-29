import React from "react";
import { createContext, useState } from "react";

const Context = createContext();
function ContextCart(props) {
  const { children } = props;
  const [cartValue, setCartValue] = useState(0);

  const increCart = () => {
    setCartValue((count) => count + 1);
  };

  const decreCart = (i) => {
    setCartValue((count) => count - i);
  };
  return (
    <Context.Provider value={{ cartValue, increCart, decreCart }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
export { ContextCart };
