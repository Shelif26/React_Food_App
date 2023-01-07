import React from "react";
import classes from "./Header.module.css";
import { Fragment } from "react";
import HeaderButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <Fragment>
        <header className={classes.header}>
          <h2>பாட்டி கடை</h2>
          <HeaderButton onClick={props.onShowCart} />
        </header>
        <div className={classes["main-image"]}>
          <img
            alt="Tell me what you eat, and I will tell you who you are"
            src="https://assets.vogue.in/photos/61d84b5b9db8964401d2b0e4/master/pass/15%20best%20multi-cuisine%20restaurants%20in%20Mumbai,%20New%20Delhi,%20Bengaluru,%20Kolkata%20and%20Goa.jpg"
          />
        </div>
      </Fragment>
    </>
  );
};

export default Header;
