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
    },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;