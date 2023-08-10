import { useQuery } from '@apollo/client';
import { GET_USER, GET_USERS_ROOMS } from '../../graphql/queries';
import { FlatList, StyleSheet, View } from 'react-native';
import { ChatRoomTile } from '../molecules';
import { ActivityIndicator, Text } from 'react-native-paper';
import { useAppTheme } from '../../hooks';
import { CustomColors } from '../../theme/types';
import { useTranslation } from 'react-i18next';

export const ChatRoomsList = () => {
    const { colors } = useAppTheme();
    const { t } = useTranslation();

    const { data, error, loading } = useQuery(GET_USERS_ROOMS);
    const { data: userData } = useQuery(GET_USER);

    const style = styles(colors);

    if (error) {
        return (
            <View style={style.errorContainer}>
                <Text variant="titleLarge" style={style.error}>
                    {t('rooms.emptyRoomsList')}
                </Text>
                <Text variant="bodyLarge" style={{ ...style.error, marginTop: 8 }}>
                    {error.message}
                </Text>
            </View>
        );
    }

    if (loading) {
        return (
            <View style={style.errorContainer}>
                <ActivityIndicator size="large" color={colors.darkPlum} />
            </View>
        );
    }

    return (
        <View style={style.container}>
            <FlatList
                data={data?.usersRooms?.rooms}
                renderItem={({ item }) => {
                    if (item?.id && userData?.user?.id) {
                        return <ChatRoomTile id={item?.id} userId={userData.user.id} />;
                    }
                    return null;
                }}
                ListEmptyComponent={
                    <View style={{ flex: 1 }}>
                        <Text variant="titleLarge" style={style.empty}>
                            {t('rooms.emptyRoomsList')}
                        </Text>
                    </View>
                }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
            />
        </View>
    );
};

const styles = (colors: CustomColors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 24
        },
        errorContainer: {
            flex: 1,
            marginTop: 24,
            alignItems: 'center',
            justifyContent: 'center'
        },
        error: {
            color: colors.darkPlum,
            marginHorizontal: 16
        },
        empty: {
            color: colors.darkPlum,
            alignSelf: 'center'
        }
    });
