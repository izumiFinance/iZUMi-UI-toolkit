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
        <InputGroup endElement={<FaSearch />}>
            <Input value={value || ''} placeholder={placeholder} onChange={(e: any) => onSearchKeyChange(e)} />
        </InputGroup>
    );
};
