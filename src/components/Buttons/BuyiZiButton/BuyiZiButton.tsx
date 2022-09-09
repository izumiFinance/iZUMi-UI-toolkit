import React from 'react';
import { BoxProps, HStack, Image, Text } from '@chakra-ui/react';
import CustomButton from '../CustomButton/CustomButton';
import { i_text_copy_bold } from '../../../style';
import useIsMobile from '../../../hooks/useIsMobile';

type BuyiZiButtonProps = {
    expand: boolean;
    tokenPrice: string;
    onClick: any;
} & BoxProps;

const BuyiZiButton: React.FC<BuyiZiButtonProps> = (props) => {
    const { expand, tokenPrice, onClick, ...rest } = props;
    const mobile = useIsMobile();

    return (
        <CustomButton
            hidden={!expand && mobile}
            variant="primary"
            w={expand ? (mobile ? '70px' : '88px') : '30px'}
            h={mobile ? '26px' : '30px'}
            borderRadius="15px"
            text={
                <HStack w="100%" mx="auto">
                    <Image
                        w={mobile ? '14px' : '19px'}
                        h={mobile ? '14px' : '19px'}
                        src={process.env.PUBLIC_URL + '/assets/tokens/iZiWhite.svg'}
                        ml={expand ? (mobile ? '9px' : '12px') : '6px'}
                    />
                    {expand && (
                        <Text className={i_text_copy_bold} color="tertiary.50" ml={mobile ? '3px !important' : '8px !important'}>
                            ${/* --.-- */}
                            {tokenPrice}
                        </Text>
                    )}
                </HStack>
            }
            onClick={() => {
                onClick();
            }}
            {...rest}
        />
    );
};

export default BuyiZiButton;
