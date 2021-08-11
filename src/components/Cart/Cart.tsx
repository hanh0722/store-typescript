import React, {useContext} from 'react';
import CartItem from './CartItem';
import styles from './Cart.module.scss';
import { ContextStore } from '../store-context/store';
const Cart = () =>{
    const storeCtx = useContext(ContextStore);
    return(
        <div className={styles.cart}>
            <h2>Your Cart!</h2>
            {storeCtx.carts.length === 0 && <p style={{textAlign: 'center'}}>Your cart is empty!</p>}
            {storeCtx.carts.length > 0 && storeCtx.carts.map(items =>{
                return <CartItem key={items.id} quantity={items.quantity} name={items.name} price={items.price} total={items.total} id={items.id}/>
            })}
        </div>
    )
}

export default Cart;