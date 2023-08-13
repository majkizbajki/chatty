import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { useAppTheme } from '../../hooks';
import { CustomColors } from '../../theme/types';

interface FormInputProps {
    label: string;
    password?: boolean;
    onChangeText: (text: string) => void;
}

export const FormInput = ({ label, password, onChangeText }: FormInputProps) => {
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    const { colors } = useAppTheme();

    const style = styles(colors);

    return (
        <View style={style.inputContainer}>
            <Text variant="labelLarge" style={style.inputLabel}>
                {label}
            </Text>
            {password ? (
                <View style={style.passwordContainer}>
                    <TextInput style={style.textInput} autoCapitalize="none" onChangeText={onChangeText} />
                    <TouchableOpacity style={style.eye} onPress={() => setIsPasswordHidden(state => (state = !state))}>
                        <IoniconsIcon name={isPasswordHidden ? 'eye-off' : 'eye'} color={colors.darkGrey} size={32} />
                    </TouchableOpacity>
                </View>
            ) : (
                <TextInput style={style.textInput} autoCapitalize="none" onChangeText={onChangeText} />
            )}
        </View>
    );
};

const styles = (colors: CustomColors) =>
    StyleSheet.create({
        inputContainer: {
            height: 74,
            marginHorizontal: 32,
            marginTop: 16
        },
        inputLabel: {
            marginBottom: 4,
            color: colors.white
        },
        textInput: {
            backgroundColor: colors.white,
            flex: 1,
            borderRadius: 12,
            padding: 12
        },
        passwordContainer: {
            flex: 1,
            backgroundColor: colors.white,
            borderRadius: 12
        },
        eye: {
            position: 'absolute',
            right: 12,
            top: 10
        }
    });
