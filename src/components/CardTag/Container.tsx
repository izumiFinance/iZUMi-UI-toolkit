import { HStack, BoxProps, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { getColorThemeSelector } from '../../utils/funcs';

type props = {} & BoxProps;

export const CardTagContainer: React.FC<props> = (props) => {
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);
    const { children, ...rest } = props;

    return (
        <HStack px="0px" position="absolute" top="0" left="32px" transform="translateY(-50%)" w="100%" {...rest}>
            {children}
        </HStack>
    );
};

export default CardTagContainer;
