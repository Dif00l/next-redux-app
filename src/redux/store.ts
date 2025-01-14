import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { championsSlice } from "./championsSlice";
import { squadsSlice } from "./squadsSlice";
import {createWrapper} from "next-redux-wrapper";

const makeStore = () => configureStore({
    reducer:{
        [cartSlice.name]: cartSlice.reducer,
        [championsSlice.name]: championsSlice.reducer,
        [squadsSlice.name]: squadsSlice.reducer
    },
    devTools:true,
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export const wrapper = createWrapper<AppStore>(makeStore);