import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { TopBar } from '../atoms';
import { useAppTheme } from '../../hooks';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import { ReactNode } from 'react';

interface ChildTopBarProps {
    children?: ReactNode;
}

export const ChildTopBar = ({ children }: ChildTopBarProps) => {
    const { colors } = useAppTheme();

    return (
        <TopBar>
            <View style={styles.container}>
                <TouchableOpacity style={styles.navigationButton}>
                    <MaterialIconsIcon name="arrow-back-ios" size={24} color={colors.darkPlum} />
                </TouchableOpacity>
                <View style={styles.contentContainer}>{children}</View>
            </View>
        </TopBar>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 44,
        marginHorizontal: 16,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    navigationButton: {
        alignSelf: 'center'
    },
    contentContainer: {
        flex: 1,
        marginLeft: 4
    }
});
