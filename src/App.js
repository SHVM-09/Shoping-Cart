import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import About from "./pages/Address";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import { useState } from "react";
import NavScrollExample from "./components/Navigation";
import Cart from "./components/Cart";
import { useContext } from "react";
import Context from "../src/components/ContextCart";

function App() {
  const [showCart, setShowCart] = useState(true);
  const [cart, setCart] = useState([]);
  const { increCart, decreCart } = useContext(Context);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    increCart();
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;

    if (!arr[ind].amount) arr[ind].amount = 1;
    if (d > 0) {
      arr[ind].amount += d;
      increCart();
    }
    if (d < 0) {
      arr[ind].amount += d;
      decreCart(1);
    }

    setCart([...arr]);
  };

  return (
    <div>
      <NavScrollExample setShowCart={setShowCart} />
      <br />
      {showCart ? (
        <Shopify handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </div>
  );
}

export default App;

function Shopify({ handleClick }) {
  return (
    <div className="appdiv">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Product">
          <Product handleClick={handleClick} />
        </Route>
        <Route path="/Contact" exact>
          <Contact />
        </Route>
        <Route path="/About" exact>
          <About />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
