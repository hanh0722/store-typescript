import React, {useContext} from "react";
import Product from "../AllProducts/Product";
import styles from './ProductList.module.scss';
import {ContextStore} from '../store-context/store';
const ProductList = () => {
  const storeCtx = useContext(ContextStore);
  return (
    <div className={styles.container}>
      {storeCtx.products.length === 0 && <p style={{textAlign: 'center', fontWeight: 'bold', fontSize: '20px'}}>No Products, Add Now!</p>}
      {storeCtx.products.length > 0 && storeCtx.products.map((items) => {
        return <Product key={items.id} name={items.name} id={items.id} price={items.price}/>;
      })}
    </div>
  );
};
export default ProductList;
