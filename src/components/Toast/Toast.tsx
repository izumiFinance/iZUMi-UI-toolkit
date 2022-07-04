import { Center, Image, useToast, ToastId, useColorMode, Text } from '@chakra-ui/react';
import Card from '../Card/Card';
import CloseButton from '../Buttons/CloseButton/CloseButton';
import { getColorThemeSelector } from '../../utils/funcs';
import { i_text_copy } from '../../style';
import useIsMobile from '../../hooks/useIsMobile';

type Type = 'info' | 'error' | 'alert';

export const useCustomToast = () => {
    const toast = useToast();
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);
    const isMobile = useIsMobile();

    const theme = {
        info: {
            img: '/assets/images/info.svg',
        },
        alert: {
            img: '/assets/images/alert.svg',
        },
        error: {
            img: '/assets/images/error.svg',
        },
    };

    return (type: string, value: any) => {
        const a = toast({
            position: 'bottom-right',
            duration: 90000,
            render: function render() {
                return (
                    <Card variant="base" borderRadius="4px" w={isMobile ? '350px' : '400px'} h="70px" position="relative">
                        <Image position="absolute" left="20px" bottom="22px" w="25px" h="25px" src={theme[type as Type].img} />
                        <Center position="absolute" w="70%" h="100%" left="60px" top="0" alignItems="center">
                            {typeof value === 'string' ? (
                                <Text className={i_text_copy} color={colorTheme('tertiary.600', 'tertiary.50')} fontSize="12px" w="100%">
                                    {value}
                                </Text>
                            ) : (
                                value
                            )}
                        </Center>
                        <CloseButton
                            position="absolute"
                            right="20px"
                            bottom="20px"
                            onClose={() => {
                                toast.close(a as ToastId);
                            }}
                        />
                    </Card>
                );
            },
        });
    };
};
