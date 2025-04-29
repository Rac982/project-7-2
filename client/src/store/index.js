import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import categorySlice from "./slices/categorySlice";
import productSlice from "./slices/productSlice";

export default configureStore({
    reducer: {
        auth: authSlice,
        categories: categorySlice,
        products: productSlice,
    }
});