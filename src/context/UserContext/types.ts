export interface UserContextType {
    token: string;
    logout: () => void;
    updateToken: (token: string) => void;
}
