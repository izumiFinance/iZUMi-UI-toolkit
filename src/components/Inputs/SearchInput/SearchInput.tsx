import { i_text_copy_bold } from '../../../style';
import { Input, InputGroup, InputProps } from '@chakra-ui/react';
import { getColorThemeSelector } from '../../../utils/funcs';
import { FaSearch } from 'react-icons/fa';
import { useTheme } from 'next-themes';

type SearchInputProps = {
    placeholder: string | any;
    onSearchKeyChange: any;
    value: any;
    size?: string;
} & InputProps;

export const SearchInput: React.FC<SearchInputProps> = (props) => {
    const { placeholder, size, onSearchKeyChange, value, ...rest } = props;
    const { theme } = useTheme();
    const colorTheme = getColorThemeSelector(theme === 'dark' ? 'dark' : 'light');

    return (
        <Input.Group {...rest}>
            <Input
                variant="filled"
                placeholder={placeholder}
                size={size ?? 'lg'}
                className={i_text_copy_bold}
                fontSize="12px"
                onChange={(e: any) => onSearchKeyChange(e)}
                value={value || ''}
                bg={colorTheme('#F9F9FB', '#140E28')}
                {...rest}
            />
            <Input.RightElement h="100%" mt="4px">
                {FaSearch}
            </Input.RightElement>
        </Input.Group>
    );
};
