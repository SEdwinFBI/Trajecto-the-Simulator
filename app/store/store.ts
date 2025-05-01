import { configureStore } from "@reduxjs/toolkit";
import { simulatorReducer } from "@store/reducers/reducers";

export const store = configureStore({
    reducer:{
        simulator:simulatorReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;