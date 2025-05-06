import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        all: [],
        current: null,
    },
    reducers: {
        setProducts: (state, { payload }) => {
            state.all = payload;
        },
        setCurrentProduct: (state, { payload }) => {
            state.current = payload;
        },
    },
});

export const { setProducts, setCurrentProduct } = productSlice.actions;

export default productSlice.reducer;