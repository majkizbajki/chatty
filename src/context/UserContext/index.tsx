import { ReactNode, createContext, useState } from 'react';
import { UserContextType } from './types';
import EncryptedStorage from 'react-native-encrypted-storage';

interface UserContextProps {
    children?: ReactNode;
}

export const UserContext = createContext<UserContextType>({
    token: '',
    logout: () => {},
    updateToken: () => {}
});

export const UserProvider = ({ children }: UserContextProps) => {
    const [token, setToken] = useState('');

    const logout = async () => {
        await EncryptedStorage.removeItem('user_token');
        // await client.resetStore();
        setToken('');
    };

    const updateToken = (token: string) => {
        setToken(token);
    };

    return <UserContext.Provider value={{ token, logout, updateToken }}>{children}</UserContext.Provider>;
};
