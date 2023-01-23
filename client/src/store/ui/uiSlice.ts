import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { UIState } from '../../interfaces';

const initialState:UIState = {
    IsDrawerOpen:false,
}

export const uiSlice = createSlice({
    name:'ui',
    initialState,
    reducers:{
   
   
        toggleDrawer(state){
            state.IsDrawerOpen = !state.IsDrawerOpen;
        },
    }
});

export const { toggleDrawer } = uiSlice.actions;
export default uiSlice.reducer;
