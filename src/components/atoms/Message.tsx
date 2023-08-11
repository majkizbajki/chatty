import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { CustomColors } from '../../theme/types';
import { useAppTheme } from '../../hooks';

interface MessageProps {
    message: string | null | undefined;
    sentByUser: boolean;
}

export const Message = ({ message, sentByUser }: MessageProps) => {
    const { colors } = useAppTheme();
    const style = styles(colors, sentByUser);

    return (
        <View style={style.container}>
            <View style={style.messageContainer}>
                <Text variant="bodyLarge" style={style.text}>
                    {message}
                </Text>
            </View>
        </View>
    );
};

const styles = (colors: CustomColors, sentByUser: boolean) =>
    StyleSheet.create({
        container: {
            alignItems: sentByUser ? 'flex-end' : 'flex-start'
        },
        messageContainer: {
            padding: 12,
            width: 245,
            backgroundColor: sentByUser ? colors.darkPlum : colors.white,
            borderRadius: 12,
            borderBottomLeftRadius: sentByUser ? 12 : 0,
            borderBottomRightRadius: sentByUser ? 0 : 12,
            marginBottom: 12
        },
        text: {
            color: sentByUser ? colors.white : colors.black
        }
    });
