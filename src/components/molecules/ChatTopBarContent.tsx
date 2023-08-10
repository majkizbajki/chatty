import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useAppTheme } from '../../hooks';
import { CustomColors } from '../../theme/types';
import { Text } from 'react-native-paper';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

interface ChatTopBarContentProps {
    activeAt: string;
    name: string;
    photoUrl?: string;
}

export const ChatTopBarContent = ({ activeAt, name, photoUrl }: ChatTopBarContentProps) => {
    const { colors } = useAppTheme();

    const style = styles(colors);

    return (
        <View style={style.container}>
            <Image
                source={photoUrl ? { uri: photoUrl } : require('../../assets/images/Profile.png')}
                style={style.image}
            />
            <View style={style.textContainer}>
                <Text numberOfLines={1} variant="titleLarge" style={style.name}>
                    {name}
                </Text>
                <Text variant="bodyLarge" style={style.activeAt}>
                    {activeAt}
                </Text>
            </View>
            <View style={style.buttonsContainer}>
                <TouchableOpacity style={style.button}>
                    <FontAwesomeIcon name="phone" size={24} color={colors.darkPlum} />
                </TouchableOpacity>
                <TouchableOpacity style={style.button}>
                    <IoniconsIcon name="videocam" size={24} color={colors.darkPlum} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = (colors: CustomColors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
        },
        image: {
            width: 44,
            height: 44
        },
        textContainer: {
            flex: 1,
            marginLeft: 12
        },
        name: {
            color: colors.darkPlum
        },
        activeAt: {
            color: colors.white
        },
        userInfoContainer: {
            flex: 1,
            marginHorizontal: 4
        },
        buttonsContainer: {
            width: 96,
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        button: {
            width: 44,
            height: 44,
            borderRadius: 22,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.white
        }
    });
