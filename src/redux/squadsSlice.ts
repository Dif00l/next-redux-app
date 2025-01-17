import { createSlice } from "@reduxjs/toolkit";
import {AppState} from "./store"

export interface SquadsState{
    squads: [{}];
}

const initialState: SquadsState = {
    squads: [{ "Name":"Nick Fury",
        "PowerIndex":"26.854",
        "Tier":"6",
        "Rang":"4",
        "Awaken":"1",
        "Image":"111",
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