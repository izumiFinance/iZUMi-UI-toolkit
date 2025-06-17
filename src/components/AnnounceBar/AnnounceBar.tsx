import React from 'react';
import { Text, Flex, BoxProps } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { getColorThemeSelector } from '../../utils/funcs';
import { useTheme } from 'next-themes';

type BarProps = {
    text: string;
    link?: string;
    linkText?: string;
    icon?: string;
    onClick: () => void;
    type: string;
    index: number;
} & BoxProps;

const AnnouncementBar: React.FC<BarProps> = (props) => {
    const { theme } = useTheme();
    const colorTheme = getColorThemeSelector(theme === 'dark' ? 'dark' : 'light');

    const { onClick } = props;

    return (
        <Flex
            direction="row"
            align="center"
            justify="center"
            px="30px"
            py="0"
            w="100%"
            h="30px"
            m="0 !important"
            bg={colorTheme('#ECE4F9', '#3D2C63')}
            justifyContent="space-between"
            transitionProperty="all"
            transitionDuration="0.3s"
            transitionTimingFunction="ease"
            transitionDelay="0.2s"
        >
            <Text
                fontFamily="Avenir"
                fontWeight="bold"
                textAlign="center"
                p="5px"
                fontSize="14px"
                color={colorTheme('secondary.700', 'secondary.200')}
            >
                {props.text}
            </Text>
            <CloseIcon
                boxSize={3}
                cursor="pointer"
                onClick={() => {
                    onClick();
                }}
            />
        </Flex>
    );
};

export default AnnouncementBar;
