import { Image, ComponentWithAs, ImageProps } from '@chakra-ui/react';
import { getColorThemeSelector } from '../../utils/funcs';
import { useTheme } from 'next-themes';

const Logo: ComponentWithAs<'img', ImageProps> = (props) => {
    const { theme } = useTheme();
    const colorTheme = getColorThemeSelector(theme === 'dark' ? 'dark' : 'light');

    const src = colorTheme('/assets/sidebar/lightLogo.svg', '/assets/sidebar/darkLogo.svg');
    return <Image {...props} src={src} />;
};

export default Logo;
