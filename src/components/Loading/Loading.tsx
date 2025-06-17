import React from 'react';
import { Text, BoxProps, Flex } from '@chakra-ui/react';
import { i_text_d } from '../../style';
import { getColorThemeSelector } from '../../utils/funcs';
import { useTheme } from 'next-themes';

type Props = {
    text?: string;
} & BoxProps;

export const Loading: React.FC<Props> = ({ text, ...rest }) => {
    const { theme } = useTheme();
    const colorTheme = getColorThemeSelector(theme === 'dark' ? 'dark' : 'light');
    return (
        <Flex direction="column" alignItems="center" justifyContent="center" pt="40px" {...rest}>
            <img width="20px" height="20px" src="/assets/gallery/loading.gif" />
            <Text className={i_text_d} color={colorTheme('tertiary.600', 'tertiary.400')} mt="16px" ml="12px">
                {text ? text : 'Loading ...'}
            </Text>
        </Flex>
    );
};
