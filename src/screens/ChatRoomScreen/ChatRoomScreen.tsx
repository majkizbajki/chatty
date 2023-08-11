import { Error } from '../../components/molecules';
import { Chat, Screen } from '../../components/templates';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useQuery } from '@apollo/client';
import { GET_ROOM } from '../../graphql/queries';
import { StyleSheet, View } from 'react-native';
import { Button } from '../../components/atoms';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator } from 'react-native-paper';

export const ChatRoomScreen = () => {
    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { params } = useRoute<RouteProp<RootStackParamList, 'ChatRoomScreen'>>();
    const { t } = useTranslation();

    const { data, error, loading, refetch } = useQuery(GET_ROOM, { variables: { roomId: params.roomId } });

    if (error) {
        return (
            <Screen>
                <Error errorMessage={error.message} />
                <View style={styles.errorButtonsContainer}>
                    <Button
                        buttonText={t('chatRoom.refetch')}
                        onPress={() => refetch()}
                        buttonStyle={styles.refetchButton}
                    />
                    <Button
                        buttonText={t('chatRoom.goBack')}
                        onPress={() => navigate('RoomsScreen')}
                        buttonStyle={{ ...styles.refetchButton, marginTop: 24 }}
                    />
                </View>
            </Screen>
        );
    }

    if (loading) {
        return (
            <Screen>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" />
                </View>
            </Screen>
        );
    }

    return <Chat data={data} />;
};

const styles = StyleSheet.create({
    errorButtonsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    refetchButton: {
        width: '50%'
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
