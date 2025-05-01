import type { simulatorState } from "@/types/inputsSimulator";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState:simulatorState={
    grade:45,
    kg:0,
    speed:0,
    type:1
}

const simulatorSlice=createSlice({
    name:"simulator",
    initialState,
    reducers:{
        setParameters(state,action:PayloadAction<simulatorState>){
            state.grade = action.payload.grade;
            state.kg = action.payload.kg;
            state.speed = action.payload.speed;
            state.type = action.payload.type;
        },
        resetParameters(state){
            state.grade = initialState.grade;
            state.kg = initialState.kg;
            state.speed = initialState.speed;
            state.type = initialState.type;
        },
    }
})

export default simulatorSlice;