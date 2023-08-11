import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { CustomColors } from '../../theme/types';
import { View } from 'react-native';
import { useAppTheme } from '../../hooks';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SEND_MESSAGE } from '../../graphql/mutations';
import { ActivityIndicator, Text } from 'react-native-paper';

interface ChatBottomBarContentProps {
    roomId: string;
}

export const ChatBottomBarContent = ({ roomId }: ChatBottomBarContentProps) => {
    const [message, setMessage] = useState('');

    const [sendMessage, { error, loading, reset }] = useMutation(SEND_MESSAGE, {
        variables: { body: message, roomId }
    });

    const { colors } = useAppTheme();

    const style = styles(colors);

    const handleSentMessage = () => {
        sendMessage();
        setMessage('');
    };

    return (
        <View style={style.container}>
            {error && (
                <View style={style.errorContainer}>
                    <Text variant="bodyLarge" numberOfLines={1} style={style.errorMessage}>
                        {error.message}
                    </Text>
                    <TouchableOpacity onPress={reset} style={style.reload}>
                        <IoniconsIcon name="reload" color={colors.darkPlum} size={32} />
                    </TouchableOpacity>
                </View>
            )}
            {loading && !error && (
                <View style={{ flex: 1 }}>
                    <ActivityIndicator size="small" color={colors.darkPlum} />
                </View>
            )}
            {!loading && !error && (
                <>
                    <TextInput
                        style={style.textInput}
                        value={message}
                        onChangeText={(value: string) => setMessage(value)}
                    />
                    <TouchableOpacity style={style.sendIcon} onPress={handleSentMessage}>
                        <IoniconsIcon name="send" color={colors.darkPlum} size={32} />
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

const styles = (colors: CustomColors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 16
        },
        errorContainer: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
        },
        errorMessage: {
            flex: 1
        },
        reload: {
            marginHorizontal: 8
        },
        textInput: {
            flex: 1,
            marginRight: 12,
            fontSize: 14,
            padding: 8,
            borderRadius: 12,
            borderBottomRightRadius: 0,
            backgroundColor: colors.white
        },
        sendIcon: {
            width: 44,
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
            transform: [{ rotateZ: '-45deg' }]
        }
    });
