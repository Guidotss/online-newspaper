import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { UIState } from '../../interfaces';

const initialState:UIState = {
    IsDrawerOpen:false,
    IsModalOpen:false,
}

export const uiSlice = createSlice({
    name:'ui',
    initialState,
    reducers:{

        toggleDrawer(state){
            state.IsDrawerOpen = !state.IsDrawerOpen;
        },
        openModal(state){
            state.IsModalOpen = true;
        },
        closeModal(state){
            state.IsModalOpen = false;
        }
    }
});

export const { toggleDrawer,openModal,closeModal } = uiSlice.actions;
export default uiSlice.reducer;
