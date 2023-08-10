import { StyleSheet, View } from 'react-native';
import { useAppTheme } from '../../hooks';
import { ReactNode } from 'react';
import { CustomColors } from '../../theme/types';

interface BottomBarProps {
    children: ReactNode;
}

export const BottomBar = ({ children }: BottomBarProps) => {
    const { colors } = useAppTheme();

    const style = styles(colors);

    return <View style={style.container}>{children}</View>;
};

const styles = (colors: CustomColors) =>
    StyleSheet.create({
        container: {
            height: 68,
            backgroundColor: colors.mediumBlue,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12
        }
    });
