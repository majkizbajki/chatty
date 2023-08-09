import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { NavigationContainer } from '@react-navigation/native';
import { ChatRoomScreen } from '../screens/ChatRoomScreen';
import { RoomsScreen } from '../screens/RoomsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="RoomsScreen" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="ChatRoomScreen" component={ChatRoomScreen} />
                <Stack.Screen name="RoomsScreen" component={RoomsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
