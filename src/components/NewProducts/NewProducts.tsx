import React, {useContext, useRef} from 'react';
import styles from './NewProducts.module.scss';
import {ContextStore} from '../store-context/store';
import { useHistory } from 'react-router-dom';
const NewProducts = () =>{
    const history = useHistory();
    const storeCtx = useContext(ContextStore);
    const nameRef = useRef<HTMLInputElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);
    
    const submitHandler = (event: React.FormEvent) =>{
        event.preventDefault();
        if(nameRef.current?.value.trim().length === 0 || priceRef.current?.value.trim().length === 0){
            return;
        }
        storeCtx.addProductHandler({
            name: nameRef.current!.value,
            price: +priceRef.current!.value,
            id: new Date().toISOString()
        })
        history.push('/');
    }
    return(
        <form onSubmit={submitHandler} className={styles.form}>
            <label htmlFor='text'>Name Of Product</label>
            <input ref={nameRef} type='text' id='text'></input>
            <label htmlFor='price'>Price</label>
            <input ref={priceRef} type="number" id='price' min='0'/>
            <button type='submit'>Add Product</button>
        </form>
    )
}

export default NewProducts;