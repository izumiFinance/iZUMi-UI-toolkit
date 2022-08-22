import React from 'react';
import { Flex, Box, useColorMode, Switch } from '@chakra-ui/react';
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

const ColorModeSelect: React.FC<{ showNav: boolean }> = ({ showNav }) => {
    const { colorMode, setColorMode } = useColorMode();
    const mobile = useIsMobile();
    return (
        <Flex direction="row" h="30px" justify="start" align="center" flex="1" borderRadius="20px" hidden={!showNav && mobile}>
            <ColorModeButton
                Icon={colorMode === 'light' ? LightModeIcon : DarkModeIcon}
                showNav={showNav}
                onClick={() => {
                    setColorMode(colorMode === 'light' ? 'dark' : 'light');
                }}
            />
        </Flex>
    );
};

export default ColorModeSelect;
