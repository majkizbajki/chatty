import { SafeAreaView, StyleSheet, View } from 'react-native';
import { CustomColors } from '../../theme/types';
import { useAppTheme } from '../../hooks';
import { ReactNode } from 'react';

interface ScreenProps {
    children: ReactNode;
    backgroundColor?: string;
    bottomSafeAreaColor?: string;
}

export const Screen = ({ children, backgroundColor, bottomSafeAreaColor }: ScreenProps) => {
    const { colors } = useAppTheme();

    const style = styles(colors, backgroundColor, bottomSafeAreaColor);

    return (
        <>
            <SafeAreaView style={style.screen}>
                <View style={style.container}>{children}</View>
            </SafeAreaView>
            <SafeAreaView style={style.bottomSafeArea} />
        </>
    );
};

const styles = (colors: CustomColors, backgroundColor?: string, bottomSafeAreaColor?: string) =>
    StyleSheet.create({
        screen: {
            flex: 1,
            backgroundColor: colors.mediumBlue
        },
        container: {
            flex: 1,
            backgroundColor: backgroundColor ?? colors.lightBlue
        },
        bottomSafeArea: {
            backgroundColor: bottomSafeAreaColor ?? colors.lightBlue
        }
    });
