import { createSlice } from "@reduxjs/toolkit";
import {AppState} from "./store"

export interface FilterState{
    klassen: Array<{Mutant:{Value:number},Talent:{Value:number},Forschung:{Value:number},Mystisch:{Value:number},Kosmos:{Value:number},Technologie:{Value:number}}>;
}

const initialState: FilterState = {
    klassen: [{Mutant:{"Value":1},Talent:{"Value":1},Forschung:{"Value":1},Mystisch:{"Value":1},Kosmos:{"Value":1},Technologie:{"Value":1}}]
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers:{
        setFilter(state, action){
            state.klassen = action.payload;
        },
        setMutant(state, action){            
            state.klassen[0].Mutant.Value = action.payload;
        },
        setTalent(state, action){            
            state.klassen[0].Talent.Value = action.payload;
        },
        setForschung(state, action){            
            state.klassen[0].Forschung.Value = action.payload;
        },
        setMystisch(state, action){            
            state.klassen[0].Mystisch.Value = action.payload;
        },
        setKosmos(state, action){            
            state.klassen[0].Kosmos.Value = action.payload;
        },
        setTechnologie(state, action){            
            state.klassen[0].Technologie.Value = action.payload;
        }



    }
});

export const{setFilter, setMutant, setTalent, setForschung, setMystisch, setKosmos, setTechnologie} = filterSlice.actions;

export const getFilter = (state: AppState) => state.filter.klassen;


export default filterSlice.reducer;