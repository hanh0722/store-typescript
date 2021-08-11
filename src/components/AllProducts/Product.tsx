import React, {useContext, useState} from "react";
import styles from "./Product.module.scss";
import ProductType from "../models/product-type";
import { ContextStore } from "../store-context/store";
const Product: React.FC<ProductType> = (props) => {
  const storeCtx = useContext(ContextStore);
  const [quantity, setQuantity] = useState(1);
  const addCartHandler = () =>{
    storeCtx.setCartHandler({
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: quantity,
      total: props.price * quantity
    })
  }
  const setValueHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setQuantity(+event.target.value);
  }
  return (
    <div className={styles.container}>
      <div className={styles.information}>
        <h3>{props.name}</h3>
        <p>{props.price} $</p>
      </div>
      <div className={styles.box}>
        <input onChange={setValueHandler} defaultValue="1" min="1" max="100" type="number" />
        <button onClick={addCartHandler}>Add To Cart!</button>
      </div>
    </div>
  );
};

export default Product;
