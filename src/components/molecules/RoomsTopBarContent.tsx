import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { CustomColors } from '../../theme/types';
import { useAppTheme } from '../../hooks';
import OctioconsIcon from 'react-native-vector-icons/Octicons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export const RoomsTopBarContent = () => {
    const { colors } = useAppTheme();
    const { logout } = useContext(UserContext);

    const style = styles(colors);

    return (
        <View style={style.container}>
            <View style={style.buttonsContainer}>
                <TouchableOpacity style={style.button}>
                    <OctioconsIcon name="search" size={24} color={colors.darkPlum} />
                </TouchableOpacity>
                {/* TODO: Add logout button */}
                <TouchableOpacity style={style.button} onPress={logout}>
                    <IoniconsIcon name="people" size={24} color={colors.darkPlum} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = (colors: CustomColors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end'
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
