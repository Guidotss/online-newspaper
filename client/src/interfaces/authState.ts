import { User } from './user'

export interface AuthState {
    status: string;
    errorMessage:object | null;
    user: User | null;
}