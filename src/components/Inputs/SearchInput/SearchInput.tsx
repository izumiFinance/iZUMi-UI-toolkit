import { SearchIcon } from '@chakra-ui/icons';
import { i_text_copy_bold } from '../../../style';
import { Input, InputGroup, InputRightElement, InputProps } from '@chakra-ui/react';

type SearchInputProps = {
    placeholder: string | any;
    onSearchKeyChange: any;
    value: any;
    size?: string;
} & InputProps;

export const SearchInput: React.FC<SearchInputProps> = (props) => {
    const { placeholder, size, onSearchKeyChange, value, ...rest } = props;

    return (
        <InputGroup {...rest}>
            <Input
                variant="filled"
                placeholder={placeholder}
                size={size ?? 'lg'}
                className={i_text_copy_bold}
                fontSize="12px"
                onChange={(e: any) => onSearchKeyChange(e)}
                value={value || ''}
            />
            <InputRightElement h="100%" mt="4px">
                <SearchIcon boxSize={5} />
            </InputRightElement>
        </InputGroup>
    );
};
