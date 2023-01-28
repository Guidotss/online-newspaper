import { News } from './news'; 

export interface AxiosJournalResponse {
    ok: boolean;
    NewsData: News[];
    errorMessage: string;
}