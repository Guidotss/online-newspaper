import { AxiosJournalResponse } from './axiosJournalResponse';

export interface JournalState {
    news:AxiosJournalResponse,
    loading:boolean,
    errorMessage:object | null,
    imageLoading:boolean
}