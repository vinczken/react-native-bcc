import { Image } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext'

export default function ImageTheme({light, dark, style}) {
    const { theme } = useTheme();
    return <Image source={theme === 'light' ? light : dark} style={style} />
}