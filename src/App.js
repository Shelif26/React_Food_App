import React, { useState } from "react";
import { Fragment } from "react";
import Header from "./components/Layouts/Header";
import Meal from "./components/Meals/Meal";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meal />
      </main>
    </Fragment>
  );
};

export default App;
