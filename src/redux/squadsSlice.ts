import { createSlice } from "@reduxjs/toolkit";
import {AppState} from "./store"

export interface SquadsState{
    squads: [{}];
}

const initialState: SquadsState = {
    squads: [{ "Name":"Nick Fury",
        "PowerIndex":"0",
        "Tier":"7",
        "Rang":"5",
        "Awaken":"0",
        "Image":"000",
        "Klasse":"Talent"}]
};

export const squadsSlice = createSlice({
    name: "squads",
    initialState,
    reducers:{
        setSquads(state, action){
            state.squads = action.payload;
        }
    }
});

export const{setSquads} = squadsSlice.actions;

export const getSquads = (state: AppState) => state.squads.squads;


export default squadsSlice.reducer;
