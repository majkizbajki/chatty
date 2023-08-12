import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { NavigationContainer } from '@react-navigation/native';
import { ChatRoomScreen } from '../screens/ChatRoomScreen';
import { RoomsScreen } from '../screens/RoomsScreen';
import RNBootSplash from 'react-native-bootsplash';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { SignInScreen } from '../screens/SignInScreen';
import { useMount } from '../hooks';
import EncryptedStorage from 'react-native-encrypted-storage';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
    const [isAuth, setIsAuth] = useState(false);

    const { token, updateToken } = useContext(UserContext);

    useMount(() => {
        retrieveUserSession();
    });

    useEffect(() => {
        if (token) {
            setIsAuth(true);
            return;
        }
        setIsAuth(false);
    }, [token]);

    // TODO
    // API doesn't have a refresh token endpoint - add extra conditions in the future (if necessary)
    const retrieveUserSession = async () => {
        const session = await EncryptedStorage.getItem('user_token');
        if (session) {
            updateToken(session);
            setIsAuth(true);
        }
        hideSplashScreen();
    };

    const hideSplashScreen = () => {
        setTimeout(async () => {
            await RNBootSplash.hide({ fade: true, duration: 500 });
        }, 1000);
    };

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!isAuth ? (
                    <Stack.Group>
                        <Stack.Screen name="SignInScreen" component={SignInScreen} />
                    </Stack.Group>
                ) : (
                    <Stack.Group>
                        <Stack.Screen name="RoomsScreen" component={RoomsScreen} />
                        <Stack.Screen name="ChatRoomScreen" component={ChatRoomScreen} />
                    </Stack.Group>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
