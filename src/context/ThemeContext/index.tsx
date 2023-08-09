import { FC, ReactNode, createContext, useMemo, useState } from 'react';
import { PaperProvider, configureFonts } from 'react-native-paper';
import { DarkTheme, LightTheme, fontConfig } from '../../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMount } from '../../hooks';

interface ThemeContext {
    themeMode: 'light' | 'dark';
    toggleTheme: (mode: 'light' | 'dark') => void;
}

export const ThemeContext = createContext<ThemeContext>({
    themeMode: 'light',
    toggleTheme: () => {}
});

interface ThemeProvider {
    children: ReactNode;
}

export const ThemeProvider: FC<ThemeProvider> = ({ children }: ThemeProvider) => {
    const [variant, setVariant] = useState<'light' | 'dark'>('light');

    useMount(() => {
        checkLocalThemeMode();
    });

    const toggleTheme = async (mode: 'light' | 'dark') => {
        try {
            await AsyncStorage.setItem('theme', mode);
            setVariant(mode);
        } catch (e) {
            // TODO
            // Add error
        }
    };

    const checkLocalThemeMode = async () => {
        try {
            const deviceScheme = await AsyncStorage.getItem('theme');
            if (deviceScheme === 'dark') {
                toggleTheme('dark');
            }
        } catch {
            // Do nothing
            // Keep initial state - light theme
        }
    };

    const themeMode = useMemo(
        () => ({
            toggleTheme,
            themeMode: variant
        }),
        [variant]
    );

    const theme = useMemo(() => {
        if (variant === 'dark') {
            return {
                ...DarkTheme,
                fonts: configureFonts({ config: fontConfig })
            };
        }
        return {
            ...LightTheme,
            fonts: configureFonts({ config: fontConfig })
        };
    }, [variant]);

    return (
        <ThemeContext.Provider value={themeMode}>
            <PaperProvider theme={theme}>{children}</PaperProvider>
        </ThemeContext.Provider>
    );
};
