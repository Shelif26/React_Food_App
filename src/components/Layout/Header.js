import { Fragment } from "react";

import HeaderCartButton from "./HeaderCardButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>பாட்டி கடை</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          alt="Tell me what you eat, and I will tell you who you are"
          src="https://assets.vogue.in/photos/61d84b5b9db8964401d2b0e4/master/pass/15%20best%20multi-cuisine%20restaurants%20in%20Mumbai,%20New%20Delhi,%20Bengaluru,%20Kolkata%20and%20Goa.jpg"
        />
      </div>
    </Fragment>
  );
};

export default Header;
