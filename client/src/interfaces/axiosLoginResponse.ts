export interface AxiosLoginResponse {
    ok: boolean;
    uid: string;
    msg: string;
    name: string;
    lastName:string;
    isCeo: boolean;
    isJournalist: boolean;
    token: string;
}