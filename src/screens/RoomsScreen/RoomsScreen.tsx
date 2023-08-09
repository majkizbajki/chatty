import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../navigation/types';

export const RoomsScreen = () => {
    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView>
            <Text>RoomsScreen</Text>
            <Button title="ChatRoomScreen" onPress={() => navigate('ChatRoomScreen')} />
        </SafeAreaView>
    );
};
