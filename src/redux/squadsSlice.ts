import { createSlice } from "@reduxjs/toolkit";
import {AppState} from "./store"

export interface SquadsState{
    squads: [{}];
}

const initialState: SquadsState = {
    squads: [{}]
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