import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./cartreducer";

const store = configureStore({
  reducer: {
    cart: rootReducer,
    // other reducers...
  },
});

export default store;
