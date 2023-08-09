import { Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../navigation/types';

export const ChatRoomScreen = () => {
    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView>
            <Text>ChatRoomScreen</Text>
            <Button title="RoomsScreen" onPress={() => navigate('RoomsScreen')} />
        </SafeAreaView>
    );
};
