import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { useAppTheme } from '../../hooks';
import { CustomColors } from '../../theme/types';
import { Text } from 'react-native-paper';
import { useState } from 'react';

interface ButtonProps {
    buttonText: string;
    buttonColor?: string;
    buttonStyle?: ViewStyle;
    disabled?: boolean;
    rippleColor?: string;
    onPress: () => void;
}

export const Button = ({ buttonText, buttonColor, buttonStyle, disabled, rippleColor, onPress }: ButtonProps) => {
    const [isPressed, setIsPressed] = useState(false);

    const { colors } = useAppTheme();
    const style = styles(colors, isPressed, buttonColor, disabled, rippleColor);

    return (
        <TouchableOpacity
            style={{ ...style.button, ...buttonStyle }}
            disabled={disabled}
            activeOpacity={1}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={onPress}
        >
            <Text variant="titleMedium" style={style.text}>
                {buttonText}
            </Text>
        </TouchableOpacity>
    );
};

const styles = (
    colors: CustomColors,
    isPressed: boolean,
    buttonColor?: string,
    disabled?: boolean,
    rippleColor?: string
) =>
    StyleSheet.create({
        button: {
            marginHorizontal: 24,
            borderRadius: 12,
            backgroundColor: disabled
                ? colors.mediumGrey
                : isPressed
                ? rippleColor ?? colors.saturatedPlum
                : buttonColor ?? colors.darkPlum
        },
        text: {
            color: colors.white,
            textAlign: 'center',
            margin: 12
        }
    });
