import { Tag, BoxProps } from '@chakra-ui/react';
import React from 'react';
import { getColorThemeSelector } from '../../utils/funcs';
import { useTheme } from 'next-themes';

type props = {
    variant: 'blue' | 'purple' | 'orange' | 'grey' | 'green' | 'red';
    text: string;
    icon?: any;
} & BoxProps;

export const CardTag: React.FC<props> = (props) => {
    const { variant, text, icon, ...rest } = props;
    const { theme } = useTheme();
    const colorTheme = getColorThemeSelector(theme === 'dark' ? 'dark' : 'light');

    const themeColor = {
        blue: {
            color: colorTheme('primary.500', 'primary.50'),
            bg: colorTheme('primary.100', '#2252CC'),
        },
        purple: {
            color: colorTheme('secondary.500', 'secondary.50'),
            bg: colorTheme('secondary.100', 'secondary.400'),
        },
        orange: {
            color: colorTheme('primary.500', 'primary.50'),
            bg: colorTheme('primary.100', '#2252CC'),
        },
        grey: {
            color: colorTheme('primary.500', 'primary.50'),
            bg: colorTheme('primary.100', '#2252CC'),
        },
        green: {
            color: colorTheme('#EAFFF9', '#EDF4FF'),
            bg: colorTheme('#5CC4A4', '#4FAD6A'),
        },
        red: {
            color: colorTheme('#FF0101', '#FF0101'),
            bg: colorTheme('#FFD6D6', '#FFD6D6'),
        },
    };

    return (
        <Tag
            px={{ base: '20px', sm: '32px' }}
            // position="absolute"
            // top="0"
            // left="32px"
            // transform="translateY(-50%)"
            color={themeColor[variant].color}
            bg={themeColor[variant].bg}
            borderColor="#5F9EFF"
            border={colorTheme('1px', '0')}
            fontSize="12px"
            lineHeight="15px"
            fontWeight="600"
            fontFamily="Montserrat"
            {...rest}
        >
            {text}
        </Tag>
    );
};
