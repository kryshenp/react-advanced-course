import React, { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  /** reduce is a built in method that allows us to transform an array of data into a single value
   * takes 2 args: 1st is a f-n which will be called for you
   * 2arg is a starting value = 0.
   * 1arg f-n receives 2 arguments itself: currentNumber and the item at which it's currently having a look
   * currentNumber will be different for every item it's calling it --- value which is carried on across executions: initially it's 0
   * but after the first time this f-n has been executed it will be the result which we returned in that previous execution
   * return currentNumber + item.amount; -- because my cartItems objects will have an amount field which stores  number of items per item type
   * we reduce this array to a single number which we output as a numberOfCartItems
   */

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
