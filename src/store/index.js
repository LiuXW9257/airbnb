import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import entireReducer from "./modules/entire.js";


const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
  },
});

export default store;
