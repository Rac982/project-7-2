import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/authSlice";
import categorySlice from "./slices/categorySlice";
import productSlice from "./slices/productSlice";
import searchSlice from "./slices/searchSlice";
import labelSlice from "./slices/labelSlice";
import cartSlice from "./slices/cartSlice";
import settingsSlice from "./slices/settingsSlice";
import filtersReducer from './slices/chartLabelSlice';
import bestSellersReducer from './slices/bestSellersSlice';

// il reducer del dashboard
import tableReducer from "./slices/dashboard/tableSlice";
import reviewsSlice from "./slices/dashboard/reviewsSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    categories: categorySlice,
    products: productSlice,
    search: searchSlice,
    labels: labelSlice,
    cart: cartSlice,
    settings: settingsSlice,

    // Business / dashboard
    tables: tableReducer,
    filters: filtersReducer,
    bestSellers: bestSellersReducer,
    reviews: reviewsSlice,
  },
});

