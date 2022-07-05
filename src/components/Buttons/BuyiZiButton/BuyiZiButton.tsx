import React from 'react';
import { BoxProps, HStack, Image, Text } from '@chakra-ui/react';
import CustomButton from '../CustomButton/CustomButton';
import { i_text_copy_bold } from '../../../style';
import useIsMobile from '../../../hooks/useIsMobile';

type BuyiZiButtonProps = {
    expand: boolean;
    tokenPrice: number;
    onClick: () => void;
} & BoxProps;

const BuyiZiButton: React.FC<BuyiZiButtonProps> = (props) => {
    const { expand, tokenPrice, onClick, ...rest } = props;
    const mobile = useIsMobile();

    return (
        <CustomButton
            hidden={!expand && mobile}
            variant="primary"
            w={expand ? '88px' : '30px'}
            h="30px"
            borderRadius="15px"
            text={
                <HStack w="100%" mx="auto">
                    <Image w="19px" h="19px" src={process.env.PUBLIC_URL + '/assets/tokens/iZiWhite.svg'} ml={expand ? '12px' : '6px'} />
                    {expand && (
                        <Text className={i_text_copy_bold} color="tertiary.50">
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
