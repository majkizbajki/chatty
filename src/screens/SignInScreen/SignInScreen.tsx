import { useFocusEffect } from '@react-navigation/native';
import { ScrollView, StyleSheet } from 'react-native';
import { AvoidSoftInput } from 'react-native-avoid-softinput';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCallback } from 'react';
import { CustomColors } from '../../theme/types';
import { useAppTheme } from '../../hooks';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { SignInForm } from '../../components/organism';

export const SignInScreen = () => {
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
                <SignInForm />
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
