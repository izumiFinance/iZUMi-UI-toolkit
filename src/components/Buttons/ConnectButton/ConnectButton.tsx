import { Text, Flex, BoxProps, useColorMode, Box } from '@chakra-ui/react';
import React from 'react';
import { i_text_d } from '../../../style';
import { getColorThemeSelector } from '../../../utils/funcs';
import CustomButton from '../CustomButton/CustomButton';

type ConnectButtonProps = {
    Identicon: any;
    onClick: () => void;
} & BoxProps;

const ConnectButton: React.FC<ConnectButtonProps> = (props) => {
    const { Identicon, onClick, ...rest } = props;
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);

    return (
        <CustomButton
            variant="none"
            width="170px"
            height="32px"
            mr="40px"
            borderRadius="2px"
            onClick={onClick}
            color={colorTheme('tertiary.700', 'tertiary.100')}
            text={
                <Flex direction="row" align="center" justify="center">
                    <Box boxSize="18px" mr="6px">
                        {' '}
                        <Identicon size={18} />{' '}
                    </Box>
                    <Text className={i_text_d} as="span" fontSize="14px" fontWeight={600}>
                        Connect Wallet
                    </Text>
                </Flex>
            }
            {...rest}
        />
    );
};

export default ConnectButton;
