import { useContext } from 'react';
import { useTheme } from 'react-native-paper';
import { ThemeContext } from '../context/ThemeContext';
import { LightAppTheme } from '../theme';
import { DarkAppTheme } from '../theme/dark';

export const useAppTheme = () => {
    const { themeMode } = useContext(ThemeContext);

    type Theme = typeof themeMode extends 'dark' ? DarkAppTheme : LightAppTheme;

    return useTheme<Theme>();
};
