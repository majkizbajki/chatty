import { useFocusEffect } from '@react-navigation/native';
import { Dimensions, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { AvoidSoftInput, useSoftInputAppliedOffsetChanged } from 'react-native-avoid-softinput';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/atoms';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../graphql/mutations';
import { UserContext } from '../../context/UserContext';
import EncryptedStorage from 'react-native-encrypted-storage';
import { useCallback, useContext, useState } from 'react';
import { CustomColors } from '../../theme/types';
import { useAppTheme } from '../../hooks';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

export const SignInScreen = () => {
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    const [signIn] = useMutation(LOGIN_USER, {
        variables: { email: 'mike.hannigan@mail.com', password: 'dFQ3JvIo0CNdKFS' }
    });
    const { updateToken } = useContext(UserContext);
    const { colors } = useAppTheme();
    const { t } = useTranslation();

    const style = styles(colors);

    const onFocusEffect = useCallback(() => {
        AvoidSoftInput.setShouldMimicIOSBehavior(true);
        AvoidSoftInput.setEnabled(true);
        return () => {
            AvoidSoftInput.setEnabled(false);
            AvoidSoftInput.setShouldMimicIOSBehavior(false);
        };
    }, []);

    useFocusEffect(onFocusEffect);

    const handleSignIn = async () => {
        const response = await signIn();
        if (response.data?.loginUser?.token) {
            await EncryptedStorage.setItem('user_token', response.data?.loginUser?.token);
            updateToken(response.data?.loginUser?.token);
        }
    };

    return (
        <SafeAreaView edges={['bottom', 'left', 'right', 'top']} style={style.screen}>
            <ScrollView
                bounces={false}
                contentContainerStyle={style.scrollContainer}
                contentInsetAdjustmentBehavior="always"
                overScrollMode="always"
                showsVerticalScrollIndicator={true}
                style={style.stretch}
            >
                <Text variant="headlineLarge" style={style.welcomeBack}>
                    {t('signIn.welcomeBack')}
                </Text>
                <Text variant="headlineMedium" style={style.welcomeDescription}>
                    {t('signIn.welcomeDescription')}
                </Text>
                <View style={style.formContainer}>
                    <View style={style.inputContainer}>
                        <Text variant="labelLarge" style={style.inputLabel}>
                            {t('signIn.email')}
                        </Text>
                        <TextInput style={style.textInput} />
                    </View>
                    <View style={style.inputContainer}>
                        <Text variant="labelLarge" style={style.inputLabel}>
                            {t('signIn.password')}
                        </Text>
                        <View style={style.passwordContainer}>
                            <TextInput style={style.textInput} />
                            <TouchableOpacity
                                style={style.eye}
                                onPress={() => setIsPasswordHidden(state => (state = !state))}
                            >
                                <IoniconsIcon
                                    name={isPasswordHidden ? 'eye-off' : 'eye'}
                                    color={colors.darkGrey}
                                    size={32}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={style.submitButtonContainer}>
                    <Button
                        onPress={handleSignIn}
                        buttonText={t('signIn.login')}
                        buttonStyle={{ width: Dimensions.get('window').width - 32 }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = (colors: CustomColors) =>
    StyleSheet.create({
        screen: {
            alignItems: 'center',
            alignSelf: 'stretch',
            flex: 1,
            justifyContent: 'center',
            backgroundColor: colors.mediumBlue
        },
        scrollContainer: {
            alignSelf: 'stretch',
            flexGrow: 1
        },
        stretch: {
            alignSelf: 'stretch'
        },
        welcomeBack: {
            marginTop: 48,
            marginLeft: 16,
            color: colors.darkPlum
        },
        welcomeDescription: {
            marginVertical: 24,
            marginLeft: 16,
            color: colors.white
        },
        formContainer: {
            flex: 1
        },
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
        },
        submitButtonContainer: {
            alignItems: 'center',
            alignSelf: 'stretch',
            justifyContent: 'center',
            marginBottom: 32
        }
    });
