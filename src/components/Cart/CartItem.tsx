import React, {useContext} from "react";
import CartType from "../models/cart-type";
import styles from "./CartItem.module.scss";
import { ContextStore } from "../store-context/store";
const CartItem: React.FC<CartType> = (props) => {
  const cartCtx = useContext(ContextStore);
  return (
    <div className={styles.col}>
      <div className={styles.container}>
        <div className={styles.row}>
          <h3>{props.name}</h3>
          <p>Price: {props.price}$</p>
          <p>Total: {props.total}</p>
        </div>
        <div className={styles.rol}>
          <button onClick={() => cartCtx.decrementHandler(props.id)}>-</button>
          <p>x{props.quantity}</p>
          <button onClick={() => cartCtx.incrementHandler(props.id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
