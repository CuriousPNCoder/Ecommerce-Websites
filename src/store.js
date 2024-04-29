import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./cartreducer";

const store = configureStore({
  reducer: {
    cart: rootReducer,
  },
});

export default store;
