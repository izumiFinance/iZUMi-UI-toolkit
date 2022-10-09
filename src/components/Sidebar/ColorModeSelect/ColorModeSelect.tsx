import React from 'react';
import { Flex, Box, useColorMode, Switch, BoxProps, Image } from '@chakra-ui/react';
import LightModeIcon from '../../Icons/LightModeIcon';
import DarkModeIcon from '../../Icons/DarkModeIcon';
import { useHover } from '../../../hooks/useHover';
import { getColorThemeSelector } from '../../../utils/funcs';
import useIsMobile from '../../../hooks/useIsMobile';

const ColorModeButton: React.FC<{
    Icon: React.FC<{
        isHovering: boolean;
    }>;
    showNav: boolean;
    onClick: any;
}> = ({ Icon, onClick, showNav }) => {
    const [ref, isHovering] = useHover<HTMLDivElement>();
    const { colorMode, setColorMode } = useColorMode();
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);

    return (
        <>
            <Box ref={ref} onClick={onClick} cursor="pointer" onChange={(e: any) => setColorMode(e.target.checked ? 'dark' : 'light')}>
                <Icon isHovering={isHovering} />
            </Box>
        </>
    );
};

const ColorModeSelect: React.FC<{ showNav: boolean } & BoxProps> = ({ showNav, ...rest }) => {
    const { colorMode, setColorMode } = useColorMode();
    const mobile = useIsMobile();
    const [ref, isHovering] = useHover<any>();

    return (
        <Flex direction="row" w="28px" h="30px" justify="start" align="center" borderRadius="20px" hidden={!showNav && mobile} {...rest}>
            <Image
                ref={ref}
                boxSize="25px"
                isHovering={isHovering}
                src={
                    isHovering
                        ? colorMode === 'light'
                            ? '/assets/header/HoverColorModeSelect.svg'
                            : '/assets/header/HoverdarkMode.svg'
                        : colorMode === 'light'
                        ? '/assets/header/ColorModeSelect.svg'
                        : '/assets/header/darkMode.svg'
                }
                fallbackSrc="/assets/header/ColorModeSelect.svg"
                cursor="pointer"
                showNav={showNav}
                onClick={() => {
                    setColorMode(colorMode === 'light' ? 'dark' : 'light');
                }}
            ></Image>
        </Flex>
    );
};

export default ColorModeSelect;
