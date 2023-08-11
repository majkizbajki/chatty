import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useAppTheme } from '../../hooks';
import { CustomColors } from '../../theme/types';

interface ErrorProps {
    errorMessage: string;
    title?: string;
}

export const Error = ({ errorMessage, title }: ErrorProps) => {
    const { colors } = useAppTheme();
    const { t } = useTranslation();

    const style = styles(colors);

    return (
        <View style={style.errorContainer}>
            <Text variant="titleLarge" style={style.error}>
                {title ?? t('errors.default')}
            </Text>
            <Text variant="bodyLarge" style={{ ...style.error, marginTop: 8 }}>
                {errorMessage}
            </Text>
        </View>
    );
};

const styles = (colors: CustomColors) =>
    StyleSheet.create({
        errorContainer: {
            flex: 1,
            marginTop: 24,
            alignItems: 'center',
            justifyContent: 'center'
        },
        error: {
            color: colors.darkPlum,
            marginHorizontal: 16
        }
    });
