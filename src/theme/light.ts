import { MD3LightTheme } from 'react-native-paper';

export const LightTheme = {
    ...MD3LightTheme,
    custom: 'property',
    colors: {
        ...MD3LightTheme.colors,
        error: '#FF445A',
        white: '#FFFFFF',
        black: '#1A1A1A',
        active: '#A8FF76',

        lightPlum: '#C692FD',
        mediumPlum: '#993AFC',
        darkPlum: '#5603AD',
        saturatedPlum: '#390273',

        lightBlue: '#F0F8FF',
        mediumBlue: '#B6DEFD',
        darkBlue: '#259DFA',

        lightGrey: '#D9DAE0',
        mediumGrey: '#BFC1CC',
        darkGrey: '#9FA2B2'
    }
};

export type LightAppTheme = typeof LightTheme;
