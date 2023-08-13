import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, StyleSheet, View } from 'react-native';
import { FormInput } from '../molecules';
import { Button } from '../atoms';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../graphql/mutations';
import { UserContext } from '../../context/UserContext';
import EncryptedStorage from 'react-native-encrypted-storage';
import { ActivityIndicator, Text } from 'react-native-paper';
import { CustomColors } from '../../theme/types';
import { useAppTheme } from '../../hooks';

export const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signIn, { error, loading }] = useMutation(LOGIN_USER, {
        variables: { email, password }
    });
    const { updateToken } = useContext(UserContext);
    const { t } = useTranslation();
    const { colors } = useAppTheme();

    const style = styles(colors);

    const handleSignIn = async () => {
        const { data } = await signIn();
        if (data?.loginUser?.token) {
            await EncryptedStorage.setItem('user_token', data?.loginUser?.token);
            updateToken(data?.loginUser?.token);
        }
    };

    return (
        <>
            <View style={style.formContainer}>
                <FormInput label={t('signIn.email')} onChangeText={text => setEmail(text)} />
                <FormInput label={t('signIn.password')} onChangeText={text => setPassword(text)} password />
                {error && (
                    <Text variant="bodyLarge" style={style.errorMessage}>
                        {error.message}
                    </Text>
                )}
            </View>
            <View style={style.submitButtonContainer}>
                <Button
                    onPress={handleSignIn}
                    buttonText={t('signIn.login')}
                    buttonStyle={{ width: Dimensions.get('window').width - 32 }}
                >
                    {loading ? <ActivityIndicator size="small" /> : null}
                </Button>
            </View>
        </>
    );
};

const styles = (colors: CustomColors) =>
    StyleSheet.create({
        formContainer: {
            flex: 1
        },
        errorMessage: {
            marginHorizontal: 32,
            marginTop: 24,
            color: colors.error
        },
        submitButtonContainer: {
            alignItems: 'center',
            alignSelf: 'stretch',
            justifyContent: 'center',
            marginBottom: 32
        }
    });
