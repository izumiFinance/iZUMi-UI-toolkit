import { Flex, BoxProps } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router';
import { i_h5 } from '../../../style';

const BackButton: React.FC<BoxProps> = (props) => {
    const history = useHistory();
    return (
        <Flex
            onClick={() => {
                history.goBack();
            }}
            cursor="pointer"
            className={i_h5}
            {...props}
        >
            {'< BACK'}
        </Flex>
    );
};

export default BackButton;
