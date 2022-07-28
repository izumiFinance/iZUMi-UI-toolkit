import { Text, Flex, BoxProps, useColorMode, Box, Image } from '@chakra-ui/react';
import React from 'react';
import { a_h5, i_text_d } from '../../../style';
import { getColorThemeSelector } from '../../../utils/funcs';
import CustomButton from '../CustomButton/CustomButton';

type ConnectButtonProps = {
    Identicon: any;
    onClick: () => void;
    variant?: string;
} & BoxProps;

const ConnectButton: React.FC<ConnectButtonProps> = (props) => {
    const { Identicon, onClick, variant, ...rest } = props;
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);

    return variant && variant === 'black' ? (
        <CustomButton
            variant="none"
            width={{ base: '160px', sm: '201px' }}
            height="46px"
            borderRadius="5px"
            onClick={onClick}
            bg="#140233"
            px={{ base: '5px', sm: '15px' }}
            text={
                <Flex direction="row" align="center" justify="center">
                    <Text className={a_h5} as="span" fontFamily="Gilroy-Bold" color="tertiary.50">
                        Connect to Wallet
                    </Text>
                    <Image boxSize="23px" ml="12px" src={process.env.PUBLIC_URL + '/assets/wallet/walletRight.svg'}></Image>
                </Flex>
            }
            {...rest}
        />
    ) : (
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
