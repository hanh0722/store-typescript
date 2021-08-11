import React, {useState, createContext, useReducer} from 'react';
import ProductType from '../models/product-type';
import CartType from '../models/cart-type';
export const ContextStore = createContext<{
    products: Array<ProductType>,
    addProductHandler: (data: ProductType) => void,
    carts: Array<CartType>,
    setCartHandler: (item: CartType) => void,
    decrementHandler: (id: string) => void,
    incrementHandler: (id: string) => void
}>({
    products: [],
    addProductHandler: () => {},
    carts: [],
    setCartHandler: () => {},
    decrementHandler: () => {},
    incrementHandler: () => {}
})

const ContextStoreProvider: React.FC = (props) =>{
    const [products, setProducts] = useState<Array<ProductType>>([]);
    const [carts, setCarts] = useState<Array<CartType>>([]);

    const addProductHandler = (data: ProductType) => {
        setProducts(prevState =>{
            return [...prevState, data];
        });
    }
    const addCartHandler = (item: CartType) =>{
        const existed = carts.findIndex(items => items.id === item.id);
        if(existed === -1){
            setCarts(prevState => [...prevState, item]);
        }
        else{
            const newCart = [...carts];
            const updatedItems = {...newCart[existed]};
            updatedItems.quantity = updatedItems.quantity + item.quantity;
            updatedItems.total = updatedItems.total + item.quantity * item.price;
            newCart[existed] = updatedItems;
            setCarts(newCart);
        }
    }
    const decrementHandler = (id: string) =>{
        const existedItems = carts.findIndex(items => items.id === id);
        const cloneCart = [...carts];
        if(cloneCart[existedItems].quantity === 1){
            const newArray = cloneCart.filter(items =>{
                return items.id !== id;
            })
            setCarts(newArray); 
        }
        else{
            cloneCart[existedItems].quantity = cloneCart[existedItems].quantity - 1;
            cloneCart[existedItems].total = cloneCart[existedItems].total - cloneCart[existedItems].price;
            setCarts(cloneCart);
        }
    }
    const incrementHandler = (id: string) =>{
        const existedItems = carts.findIndex(items => items.id === id);
        const cloneCart = [...carts];
        cloneCart[existedItems].quantity = cloneCart[existedItems].quantity + 1;
        cloneCart[existedItems].total = cloneCart[existedItems].total + cloneCart[existedItems].price;
        setCarts(cloneCart);
    }
    const storeCtx = {
        addProductHandler: addProductHandler,
        products: products,
        carts: carts,
        setCartHandler: addCartHandler,
        decrementHandler: decrementHandler,
        incrementHandler: incrementHandler
    }
    
    return (
        <ContextStore.Provider value={storeCtx}>
            {props.children}
        </ContextStore.Provider>
    )
}

export default ContextStoreProvider;