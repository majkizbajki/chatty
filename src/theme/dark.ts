import { MD3DarkTheme } from 'react-native-paper';

export const DarkTheme = {
    ...MD3DarkTheme,
    custom: 'property',
    colors: {
        ...MD3DarkTheme.colors,
        // TODO
        // Change to the dark theme colors in the future
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

export type DarkAppTheme = typeof DarkTheme;
