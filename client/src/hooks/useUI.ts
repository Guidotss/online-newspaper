import { useAppDispatch, useAppSelector } from './hooks';
import { toggleDrawer } from '../store/ui/uiSlice';


export const useUI = () => {
    const dispatch = useAppDispatch();
    const { IsDrawerOpen } = useAppSelector((state) => state.ui);

    const OnToggleDrawer = () => {
        dispatch(toggleDrawer());
    }

    return {
        IsDrawerOpen,
        OnToggleDrawer,
    }
}