import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { NavigationContainer } from '@react-navigation/native';
import { ChatRoomScreen } from '../screens/ChatRoomScreen';
import { RoomsScreen } from '../screens/RoomsScreen';
import RNBootSplash from 'react-native-bootsplash';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
    const hideSplashScreen = () => {
        setTimeout(async () => {
            await RNBootSplash.hide({ fade: true, duration: 500 });
        }, 1000);
    };

    return (
        <NavigationContainer onReady={hideSplashScreen}>
            <Stack.Navigator initialRouteName="RoomsScreen" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="ChatRoomScreen" component={ChatRoomScreen} />
                <Stack.Screen name="RoomsScreen" component={RoomsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
