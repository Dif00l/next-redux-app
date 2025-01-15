import { createSlice } from "@reduxjs/toolkit";
import {AppState} from "./store";

export interface ChampionsState{
    champions: [{}];
}

const initialState: ChampionsState = {
    champions: [{"Name":"Abomination","Klasse":"Forschung","Image":"051"}]
};

export const championsSlice = createSlice({
    name: "champions",
    initialState,
    reducers:{
        setChampions(state, action){
            state.champions = action.payload;
        },
        sortChampions(state, action){
            var temp = state.champions;

        }

    }
});


export const{setChampions} = championsSlice.actions;

export const getChampions = (state: AppState) => state.champions.champions;


export default championsSlice.reducer;