import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductType from "../models/product-type";

type StoreType = {
    products: Array<ProductType>
}
const initialState = {
    products: []
} as StoreType

const productSlice = createSlice({
    name: 'Product-slice',
    initialState: initialState,
    reducers: {
        addProductHandler(state, action: PayloadAction<ProductType>){
            state.products = [...state.products, action.payload];
        }
    }
})

export const productActions = productSlice.actions;
const store = configureStore({
    reducer: {
        product: productSlice.reducer
    }
})

export default store;