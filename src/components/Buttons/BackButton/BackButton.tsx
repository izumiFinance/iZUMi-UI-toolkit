import { Flex, BoxProps } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { i_h5 } from '../../../style';

const BackButton: React.FC<BoxProps> = (props) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <Flex
            onClick={() => {
                navigate(-1);
            }}
            cursor="pointer"
            className={i_h5}
            {...props}
        >
            {'< '}
            {t('BACK')}
        </Flex>
    );
};

export default BackButton;
