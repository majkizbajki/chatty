import { ParamListBase } from '@react-navigation/native';

export interface RootStackParamList extends ParamListBase {
    ChatRoomScreen: {
        roomId: string;
    };
    RoomsScreen: undefined;
}
