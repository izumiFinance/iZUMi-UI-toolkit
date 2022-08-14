import { HStack, Button, Input, useColorMode, Tooltip, BoxProps, useOutsideClick, Text } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { getColorThemeSelector } from '../../../utils/funcs';
import { i_h3, i_text_copy } from '../../../style';

export const CustomNumberInput: React.FC<
    {
        onBlur?(v: any): void;
        size?: 'xs' | 'sm' | 'md';
        onInc?(): void;
        onDec?(): void;
        inputValue?: any;
        errorInfo?: string;
        fontClass?: any;
        disabled?: boolean;
        inputBg?: any;
        setIsInputFocus?: any;
        unit?: string;
    } & BoxProps
> = ({ onInc, onDec, size, fontClass, onBlur, inputValue, errorInfo, disabled, inputBg, setIsInputFocus, unit, ...rest }) => {
    const [localValue, setLocalValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showErrorInfo, setShowErrorInfo] = useState(false);
    const styleFun = () => {
        switch (size) {
            case 'xs':
                return {
                    btnFontSize: '12px',
                    inputFontSize: '14px',
                    px: '0',
                };
            case 'sm':
                return {
                    btnFontSize: '8px',
                    inputFontSize: '8px',
                    px: '0',
                };
            case 'md':
                return {
                    btnFontSize: '12px',
                    inputFontSize: '13px',
                    px: '0',
                };
            default:
                return {
                    btnFontSize: '14px',
                    inputFontSize: '18px',
                    px: '3px',
                };
        }
    };
    const style = styleFun();
    const onChange = useCallback(
        (e) => {
            setLocalValue(e.target.value);
            setIsTyping(true);
        },
        [setIsTyping, setLocalValue]
    );

    const handleFocus = useCallback(() => {
        setShowErrorInfo(false);
        setIsInputFocus && setIsInputFocus(true);
        inputValue && setLocalValue(inputValue);
    }, [setShowErrorInfo, setLocalValue, inputValue]);

    const handleBlur = useCallback(() => {
        setIsTyping(false);
        onBlur && onBlur(localValue);
        setLocalValue('');
        setShowErrorInfo(true);
    }, [setIsTyping, localValue, onBlur, setShowErrorInfo]);

    const colorTheme = getColorThemeSelector(useColorMode().colorMode);

    const inputFocusRef = React.useRef<any | null>(null);
    useOutsideClick({
        ref: inputFocusRef,
        handler: () => {
            setIsInputFocus && setIsInputFocus(false);
        },
    });

    return (
        <HStack px={style.px} color="#9388AD" {...rest}>
            {onDec && (
                <Button fontSize={style.btnFontSize} onClick={onDec} bg="none" w="20px" minWidth="20px !important" p="0">
                    -
                </Button>
            )}
            <Tooltip
                hasArrow={true}
                label={errorInfo}
                textColor="white"
                bg="#E25C5C"
                fontFamily="Montserrat-Bold"
                placement="top"
                isOpen={errorInfo !== undefined && errorInfo !== '' && showErrorInfo}
                borderRadius="4px"
                height="26px"
            >
                <Input
                    ref={inputFocusRef}
                    textAlign={'center'}
                    className={fontClass || i_h3}
                    fontSize={style.inputFontSize}
                    value={isTyping ? localValue : inputValue || ''}
                    onChange={(e: any) => {
                        onChange(e);
                    }}
                    disabled={disabled}
                    placeholder="0.00"
                    _placeholder={{
                        color: colorTheme('tertiary.500', 'tertiary.200'),
                    }}
                    color={colorTheme('tertiary.500', 'tertiary.200')}
                    border="none"
                    paddingLeft={'8px'}
                    paddingRight="8px"
                    onBlur={() => {
                        handleBlur();
                    }}
                    onFocus={() => {
                        handleFocus();
                    }}
                    _focus={{}}
                    bg={inputBg ? inputBg : 'unset'}
                />
            </Tooltip>
            {unit && (
                <Text className={i_text_copy} color={colorTheme('#9E96AF', 'tertiary.300')} ml="0px !important" mr="5px !important">
                    {unit}
                </Text>
            )}
            {onInc && (
                <Button fontSize={style.btnFontSize} onClick={onInc} bg="none" w="20px" minWidth="20px !important" p="0">
                    +
                </Button>
            )}
        </HStack>
    );
};
