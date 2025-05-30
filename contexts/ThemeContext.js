import { createContext, useContext, useEffect, useState } from 'react';
import { Appearance, useColorScheme } from 'react-native';
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const systemColorScheme = useColorScheme();
    const [theme, setTheme] = useState(systemColorScheme || 'null');

    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setTheme(colorScheme || 'null');
        });
        return () => subscription.remove();
    }, []);


    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);
