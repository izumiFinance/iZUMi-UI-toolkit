import {
    Image,
    ComponentWithAs,
    ImageProps,
    useColorMode,
} from '@chakra-ui/react';
import { getColorThemeSelector } from '../../utils/funcs';

const Logo: ComponentWithAs<'img', ImageProps> = (props) => {
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);

    const src = colorTheme(
        '/assets/sidebar/lightLogo.svg',
        '/assets/sidebar/darkLogo.svg'
    );
    return <Image {...props} src={ src} />;
};

export default Logo;
