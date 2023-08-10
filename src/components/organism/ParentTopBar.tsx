import { StyleSheet, View } from 'react-native';
import { TopBar } from '../atoms';
import { CustomColors } from '../../theme/types';
import { useAppTheme } from '../../hooks';
import { Text } from 'react-native-paper';
import { ReactNode } from 'react';

interface ParentTopBarProps {
    label: string;
    children?: ReactNode;
}

export const ParentTopBar = ({ label, children }: ParentTopBarProps) => {
    const { colors } = useAppTheme();

    const style = styles(colors);

    return (
        <TopBar>
            <View style={style.container}>
                <Text variant="headlineMedium" style={style.label}>
                    {label}
                </Text>
                <View style={style.contentContainer}>{children}</View>
            </View>
        </TopBar>
    );
};

const styles = (colors: CustomColors) =>
    StyleSheet.create({
        container: {
            height: 44,
            marginHorizontal: 16,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        label: {
            color: colors.darkPlum
        },
        contentContainer: {
            flex: 1
        }
    });
