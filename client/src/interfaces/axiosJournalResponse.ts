import { News } from './news'; 

export interface AxiosJournalResponse {
    ok: boolean;
    news: News[];
    errorMessage: string;
}