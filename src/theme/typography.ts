import { Platform } from 'react-native';

type Font = {
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    fontStyle?: 'normal' | 'italic' | undefined;
};

type MD3Type = {
    fontFamily?: string;
    letterSpacing?: number;
    fontWeight?: Font['fontWeight'];
    lineHeight?: number;
    fontSize?: number;
    fontStyle?: Font['fontStyle'];
};

export const fontConfig: Record<string, MD3Type> = {
    // Heading 1
    headlineLarge: {
        fontFamily: Platform.select({
            android: 'Poppins-Bold',
            ios: 'Poppins',
            default: 'Poppins-Bold'
        }),
        fontWeight: Platform.select({
            ios: '700'
        }),
        fontSize: 36,
        lineHeight: 42,
        letterSpacing: 0
    },
    // Heading 2
    headlineMedium: {
        fontFamily: Platform.select({
            android: 'Poppins-Bold',
            ios: 'Poppins',
            default: 'Poppins-Bold'
        }),
        fontWeight: Platform.select({
            ios: '700'
        }),
        fontSize: 28,
        lineHeight: 42,
        letterSpacing: 0
    },
    // Heading 3
    headlineSmall: {
        fontFamily: Platform.select({
            android: 'Poppins-Bold',
            ios: 'Poppins',
            default: 'Poppins-Bold'
        }),
        fontWeight: Platform.select({
            ios: '700'
        }),
        fontSize: 22,
        lineHeight: 33,
        letterSpacing: 0
    },
    // Heading 4
    titleLarge: {
        fontFamily: Platform.select({
            android: 'Poppins-SemiBold',
            ios: 'Poppins',
            default: 'Poppins-SemiBold'
        }),
        fontWeight: Platform.select({
            ios: '600'
        }),
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0
    },
    // Button text
    titleMedium: {
        fontFamily: Platform.select({
            android: 'Poppins-SemiBold',
            ios: 'Poppins',
            default: 'Poppins-SemiBold'
        }),
        fontWeight: Platform.select({
            ios: '600'
        }),
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.01
    },
    // Label
    labelLarge: {
        fontFamily: Platform.select({
            android: 'Poppins-Medium',
            ios: 'Poppins',
            default: 'Poppins-Medium'
        }),
        fontWeight: Platform.select({
            ios: '500'
        }),
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0
    },
    // Title&input
    titleSmall: {
        fontFamily: Platform.select({
            android: 'Poppins-Medium',
            ios: 'Poppins',
            default: 'Poppins-Medium'
        }),
        fontWeight: Platform.select({
            ios: '500'
        }),
        fontSize: 15,
        lineHeight: 20,
        letterSpacing: 0
    },
    // Caption
    labelSmall: {
        fontFamily: Platform.select({
            android: 'Poppins-Regular',
            ios: 'Poppins',
            default: 'Poppins-Regular'
        }),
        fontWeight: Platform.select({
            ios: '400'
        }),
        fontSize: 10,
        lineHeight: 10,
        letterSpacing: 0
    },
    // Body text
    bodyLarge: {
        fontFamily: Platform.select({
            android: 'SF-Compact-Text-Regular',
            ios: 'SF-Compact-Text',
            default: 'SF-Compact-Text-Regular'
        }),
        fontWeight: Platform.select({
            ios: '400'
        }),
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: 0
    },
    // Caption (bold)
    bodyMedium: {
        fontFamily: Platform.select({
            android: 'SF-Compact-Display-Bold',
            ios: 'SF-Compact-Display',
            default: 'SF-Compact-Display-Bold'
        }),
        fontWeight: Platform.select({
            ios: '700'
        }),
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0
    },
    // Special text
    bodySmall: {
        fontFamily: Platform.select({
            android: 'SF-Compact-Display-Regular',
            ios: 'SF-Compact-Display',
            default: 'SF-Compact-Display-Regular'
        }),
        fontWeight: Platform.select({
            ios: '400'
        }),
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0
    }
};
