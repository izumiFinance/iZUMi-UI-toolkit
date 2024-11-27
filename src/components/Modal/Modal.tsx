import { Box, Flex, HStack, Text, useColorMode, BoxProps, Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../../components/Card/Card';
import CloseButton from '../../components/Buttons/CloseButton/CloseButton';
import { i_text_copy_bold } from '../../style';
import { getColorThemeSelector } from '../../utils/funcs';
import useIsMobile from '../../hooks/useIsMobile';

const MotionBox = motion(Box);

type ModalProps = {
    isOpen: boolean;
    onClose: any;
    title: any;
    children: any;
    modalBg?: any;
    titleProps?: BoxProps;
    contentProps?: BoxProps;
    isShowClose?: boolean;
} & BoxProps;

export const Modal: React.FC<ModalProps> = (props) => {
    const { isOpen, onClose, title, children, modalBg, titleProps, contentProps, isShowClose = true, ...rest } = props;
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);
    const bgColor = modalBg ?? colorTheme('#ffffff', '#211834');
    const isMobile = useIsMobile();

    return isMobile ? (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* 背景遮罩 */}
                    <MotionBox
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        w="100vw"
                        h="100vh"
                        bg="#0000004D"
                        position="fixed"
                        top="0"
                        left="0"
                        zIndex={8}
                        onClick={onClose} // 点击外部触发关闭
                        my="0px !important"
                        mx="0px !important"
                    ></MotionBox>

                    {/* 弹窗内容 */}
                    <MotionBox
                        initial={{ y: '100%' }} // 初始状态：在屏幕下方
                        animate={{ y: '0%' }} // 动画目标状态：完全显示
                        exit={{ y: '100%' }} // 退出状态：回到屏幕下方
                        transition={{ duration: 0.3 }}
                        position="fixed"
                        bottom="0"
                        left="0"
                        w="100%"
                        maxH="95%" // 确保父容器限制了高度
                        zIndex={9}
                        my="0px !important"
                        mx="0px !important"
                        overflowY="auto"
                    >
                        <Card
                            variant="deep2"
                            maxH="100%"
                            overflowY="scroll"
                            css={{
                                '&::-webkit-scrollbar': {
                                    display: 'none !important',
                                },
                            }}
                            pb={{ base: '35px', sm: '43px' }}
                            borderRadius="20px 20px 0px 0px"
                            {...rest}
                        >
                            {/* 标题部分 */}
                            <HStack
                                justifyContent="space-between"
                                top="0"
                                pos="sticky"
                                bgColor={bgColor}
                                zIndex="3"
                                pt={{ base: '35px', sm: '40px' }}
                                pb={{ base: '11px', sm: '20px' }}
                                px={{ base: '22px', lg: '50px' }}
                                mb={{ base: '0px', sm: '20px' }}
                                {...titleProps}
                            >
                                {typeof title === 'string' ? (
                                    <Text className={i_text_copy_bold} fontSize="18px !important">
                                        {title}
                                    </Text>
                                ) : (
                                    title
                                )}
                                {isShowClose && <CloseButton onClose={onClose} />}
                            </HStack>

                            {/* 内容部分 */}
                            <Box px={{ base: '22px', lg: '50px' }} {...contentProps}>
                                {children}
                            </Box>
                        </Card>
                    </MotionBox>
                </>
            )}
        </AnimatePresence>
    ) : isOpen ? (
        <>
            <Flex
                w="200%"
                h="200%"
                top="-200px"
                left="-200px"
                bg="black"
                opacity={colorTheme(0.15, 0.4)}
                position="fixed"
                zIndex={8}
                onClick={() => {
                    onClose();
                }}
            ></Flex>

            <Card
                variant="deep2"
                borderRadius="2px"
                zIndex={9}
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
                pb={{ base: '35px', sm: '43px' }}
                {...rest}
            >
                <HStack
                    justifyContent="space-between"
                    top="0px"
                    pos="sticky"
                    bgColor={bgColor}
                    zIndex="3"
                    pt={{ base: '35px', sm: '40px' }}
                    pb={{ base: '11px', sm: '20px' }}
                    px={{ base: '22px', lg: '50px' }}
                    mb={{ base: '0px', sm: '20px' }}
                    {...titleProps}
                >
                    {typeof title === 'string' ? (
                        <Text className={i_text_copy_bold} fontSize="18px !important">
                            {title}
                        </Text>
                    ) : (
                        title
                    )}
                    {isShowClose && <CloseButton onClose={onClose} />}
                </HStack>
                <Box px={{ base: '22px', lg: '50px' }} {...contentProps}>
                    {children}
                </Box>
            </Card>
        </>
    ) : (
        <></>
    );
};
