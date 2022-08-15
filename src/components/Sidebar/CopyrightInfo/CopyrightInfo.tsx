import React from 'react';
import { Box } from '@chakra-ui/react';

const CopyrightInfo: React.FC = () => {

    return (
        <Box
            mb="66px"
            fontSize="9px"
            alignSelf="center"
            fontFamily="Lato"
            fontWeight="bold"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="170"
                height="10"
                viewBox="0 0 170 10"
            >
                <text
                    id="_2021_izumi_Finance._All_rights_reserved."
                    data-name="@2021 izumi Finance. All rights reserved."
                    className="copyright-text"
                    x="-0.501"
                    y="7.375"
                >
                    @2021-2022 iZUMi. &nbsp; All rights reserved.
                </text>
            </svg>
        </Box>
    );
};

export default CopyrightInfo;
