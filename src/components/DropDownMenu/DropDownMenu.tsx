import { BoxProps, HStack } from '@chakra-ui/react';
import { config } from '../../../../config/sidebar/config';
import { DropDownButton } from './DropDownButton/DropDownButton';

export const DropDownMenu: React.FC<BoxProps> = (props) => {
    const { ...rest } = props;
    return (
        <HStack {...rest} spacing="30px">
            {config.pages.map((page) => {
                const commonAttr = {
                    key: page.name,
                    img: page.img,
                };
                if (page.children.length === 0) {
                    return <DropDownButton {...commonAttr} page={page} />;
                } else {
                    return <DropDownButton {...commonAttr} page={page} />;
                }
            })}
        </HStack>
    );
};
