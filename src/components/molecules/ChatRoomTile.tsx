import { useQuery } from '@apollo/client';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { GET_ROOM } from '../../graphql/queries';
import { useAppTheme } from '../../hooks';
import { CustomColors } from '../../theme/types';
import { Text } from 'react-native-paper';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import Skeleton from '../atoms/Skeleton';

interface ChatRoomTileProps {
    id: string;
    userId: string;
}

export const ChatRoomTile = ({ id, userId }: ChatRoomTileProps) => {
    const [isNew, setIsNew] = useState(false);
    const [lastMessageSentTime, setLastMessageSentTime] = useState<string | null>();
    const [lastMessage, setLastMessage] = useState<string | null | undefined>('');
    const [lastMessageId, setLastMessageId] = useState<string | null>();

    const { t } = useTranslation();
    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { colors } = useAppTheme();

    const {
        data: roomData,
        error,
        loading,
        refetch
    } = useQuery(GET_ROOM, {
        variables: { roomId: id },
        pollInterval: 1000
    });

    const style = styles(colors, isNew);

    useEffect(() => {
        if (roomData?.room?.messages) {
            const lastMessage = roomData.room.messages[roomData.room.messages.length - 1];
            if (lastMessage?.user?.id !== userId && lastMessage?.id !== lastMessageId && !isNew) {
                setIsNew(true);
                setLastMessage(lastMessage?.body);
                setLastMessageId(lastMessage?.id);
                setLastMessageSentTime(lastMessage?.insertedAt);
                return;
            }
        }
    }, [isNew, lastMessageId, roomData?.room?.messages, userId]);

    if (error) {
        return (
            <TouchableOpacity style={style.errorContainer} onPress={() => refetch()}>
                <Text variant="labelLarge" style={style.error}>
                    {t('errors.default')}
                </Text>
                <Text variant="bodyLarge" style={{ ...style.error, marginTop: 8 }}>
                    {t('rooms.pressToRefetch')}
                </Text>
            </TouchableOpacity>
        );
    }

    if (loading) {
        return (
            <View style={style.skeletonContainer}>
                <Skeleton
                    width={64}
                    height={64}
                    styleProps={{ borderRadius: 32, marginHorizontal: 16, alignSelf: 'center' }}
                />
                <View style={style.contentContainer}>
                    <View style={style.statusContainer}>
                        <Skeleton width={64} height={12} />
                    </View>
                    <Skeleton width={240} height={12} styleProps={{ marginTop: 12 }} />
                    <Skeleton width={240} height={12} styleProps={{ marginTop: 8 }} />
                </View>
            </View>
        );
    }

    return (
        <TouchableOpacity
            style={style.container}
            onPress={() => {
                setIsNew(false);
                navigate('ChatRoomScreen', { roomId: roomData?.room?.id! });
            }}
        >
            <Image
                // TODO: Update photoUrl in the future
                // source={photoUrl ? { uri: photoUrl } : require('../../assets/images/Profile.png')}
                source={require('../../assets/images/Profile.png')}
                style={style.image}
            />
            <View style={style.contentContainer}>
                <View style={style.statusContainer}>
                    {isNew && <View style={style.newMessage} />}
                    {!isNew && roomData?.room?.messages && (
                        <Text variant="bodySmall">{dayjs(lastMessageSentTime).fromNow()}</Text>
                    )}
                </View>
                <Text numberOfLines={1} variant="labelLarge" style={style.chatName}>
                    {roomData?.room?.name}
                </Text>
                <Text numberOfLines={1} variant="bodyLarge" style={style.chatName}>
                    {lastMessage}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = (colors: CustomColors, isNew: boolean) =>
    StyleSheet.create({
        container: {
            height: 88,
            backgroundColor: isNew ? colors.darkPlum : colors.white,
            borderRadius: 12,
            marginVertical: 12,
            flexDirection: 'row'
        },
        skeletonContainer: {
            height: 88,
            backgroundColor: colors.white,
            borderRadius: 12,
            marginVertical: 12,
            flexDirection: 'row'
        },
        image: {
            marginHorizontal: 16,
            width: 64,
            height: 64,
            alignSelf: 'center'
        },
        contentContainer: {
            flex: 1
        },
        statusContainer: {
            marginTop: 12,
            marginRight: 16,
            alignItems: 'flex-end'
        },
        newMessage: {
            width: 12,
            height: 12,
            borderRadius: 6,
            backgroundColor: colors.active
        },
        chatName: {
            marginRight: 32,
            color: isNew ? colors.white : colors.black
        },
        errorContainer: {
            height: 88,
            borderRadius: 12,
            marginVertical: 12,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.error
        },
        error: {
            color: colors.black,
            marginHorizontal: 16
        }
    });
