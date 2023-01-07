import React from "react";
import classes from "./HeaderCardButton.module.css";

const HeaderButton = (props) => {
  function print() {
    console.log("-------clicked------------");
  }
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <i class="fa-sharp fa-solid fa-cart-shopping"></i>
        </span>
        <span>Cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </>
  );
};

export default HeaderButton;
