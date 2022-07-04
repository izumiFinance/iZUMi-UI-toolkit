import { BoxProps, Flex, Text, HStack, useColorMode, Box } from '@chakra-ui/react';
import Card from '../../components/Card/Card';
import { i_text_copy_bold } from '../../style';
import CloseButton from '../../components/Buttons/CloseButton/CloseButton';
import { getColorThemeSelector } from '../../utils/funcs';

type ModalProps = {
    isOpen: boolean | any;
    onClose: any;
    title: string | any;
    children: any;
} & BoxProps;

export const Modal: React.FC<ModalProps> = (props) => {
    const { isOpen, onClose, title, children, ...rest } = props;
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);
    const bgColor = colorTheme('#ffffff', '#211834');
    return (
        isOpen && (
            <>
                <Flex
                    w="200%"
                    h="200%"
                    top="-200px"
                    left="-200px"
                    bg="black"
                    opacity={colorTheme(0.15, 0.4)}
                    position="fixed"
                    zIndex={10}
                    onClick={() => {
                        onClose();
                    }}
                ></Flex>

                <Card
                    variant="deep2"
                    borderRadius="2px"
                    zIndex={11}
                    position="fixed"
                    top="50%"
                    left="50%"
                    maxH="95%"
                    overflowY="scroll"
                    css={{
                        '&::-webkit-scrollbar': {
                            display: 'none !important',
                        },
                    }}
                    transform="translateX(-50%) translateY(-50%)"
                    pb="43px"
                    {...rest}
                >
                    <HStack
                        justifyContent="space-between"
                        top="0px"
                        pos="sticky"
                        bgColor={bgColor}
                        zIndex="1"
                        pt="40px"
                        pb="20px"
                        px={{ base: '30px', lg: '50px' }}
                        mb="20px"
                    >
                        {typeof title === 'string' ? (
                            <Text className={i_text_copy_bold} fontSize="18px">
                                {title}
                            </Text>
                        ) : (
                            title
                        )}
                        <CloseButton onClose={onClose} />
                    </HStack>
                    <Box px={{ base: '30px', lg: '50px' }}>{children}</Box>
                </Card>
            </>
        )
    );
};
