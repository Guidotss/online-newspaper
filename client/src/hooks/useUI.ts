import { useAppDispatch, useAppSelector } from './hooks';
import { toggleDrawer,openModal,closeModal } from '../store/ui/uiSlice';


export const useUI = () => {
    const dispatch = useAppDispatch();
    const { IsDrawerOpen,IsModalOpen } = useAppSelector((state) => state.ui);

    const OnToggleDrawer = () => {
        dispatch(toggleDrawer());
    }

    const onOpenModal = () => {
        dispatch(openModal());
    }

    const onCloseModal = () => {
        dispatch(closeModal());
    }

    return {
        IsDrawerOpen,
        IsModalOpen,

        OnToggleDrawer,
        onOpenModal,
        onCloseModal
    }
}