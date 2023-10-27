import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import LoginSlice from "./LoginSlice";
import DCart from "./DCart";

const store = configureStore({
    reducer : {
        app : appSlice,
        userDetail : LoginSlice,
        cart : DCart
    }
})

export default store;