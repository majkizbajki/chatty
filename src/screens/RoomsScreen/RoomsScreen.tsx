import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const RoomsScreen = () => {
    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView>
            <Button title="ChatRoomScreen" onPress={() => navigate('ChatRoomScreen')} />
        </SafeAreaView>
    );
};
