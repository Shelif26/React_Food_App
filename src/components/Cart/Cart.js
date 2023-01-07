import classes from "./Cart.module.css";
import Modal from "../UI/Modal.js";

const Cart = (props) => {
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Idly", amount: 2, price: 10 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <Modal onClose={props.onClose}>
        {cartItem}
        <div className={classes.total}>
          <span>
            <i class="fa-solid fa-sack-dollar"></i>Totel Amount
          </span>
          <span>100</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </Modal>
    </>
  );
};

export default Cart;
