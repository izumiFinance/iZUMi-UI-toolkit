import { HStack, BoxProps } from '@chakra-ui/react';
import React from 'react';
import { getColorThemeSelector } from '../../utils/funcs';
import { useTheme } from 'next-themes';

type props = {} & BoxProps;

export const CardTagContainer: React.FC<props> = (props) => {
    const { theme } = useTheme();
    const colorTheme = getColorThemeSelector(theme === 'dark' ? 'dark' : 'light');
    const { children, ...rest } = props;

    return (
        <HStack
            px="0px"
            position="absolute"
            top="0"
            left={{ base: '26px', sm: '32px' }}
            transform="translateY(-50%)"
            w={{ base: 'unset', sm: '100%' }}
            {...rest}
        >
            {children}
        </HStack>
    );
};

export default CardTagContainer;
