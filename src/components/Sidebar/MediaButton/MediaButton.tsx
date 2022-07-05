import React, { useState } from 'react';
import { Divider, Flex, Link, Menu, MenuButton, MenuItem, MenuList, useColorMode } from '@chakra-ui/react';
import { useHover } from '../../../hooks/useHover';
import { i_text_d } from '../../../style';
import { getColorThemeSelector } from '../../../utils/funcs';

interface Props {
    Icon: React.FC<{
        isHovering: boolean;
    }>;
    link?: string;
    type?: string;
    links?: any;
}

const MediaButton: React.FC<Props> = (pros) => {
    const { Icon, link, type, links } = pros;
    const [ref, isHovering] = useHover<HTMLDivElement>();
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);
    const [isOpenList, setOpenList] = useState(false);

    return type === 'list' ? (
        <Flex
            onClick={() => {
                setOpenList(true);
            }}
            onMouseOver={() => {
                setOpenList(true);
            }}
            onMouseLeave={() => {
                setOpenList(false);
            }}
            ref={ref}
        >
            <Flex mt="-23px" pt="25px">
                <Icon isHovering={isHovering} />
            </Flex>
            <Flex zIndex="1">
                <Menu isOpen={isOpenList}>
                    <MenuButton></MenuButton>
                    <MenuList
                        minW="0px"
                        w="130px"
                        className={i_text_d}
                        bg={colorTheme('#FBFBFB', '#100C1E')}
                        position="absolute"
                        bottom="40px"
                        left="-20px"
                        fontSize="13px"
                    >
                        <MenuItem
                            justifyContent="center"
                            onClick={() => {
                                window.open(links.telegramChannel);
                            }}
                        >
                            Channel
                        </MenuItem>
                        <Divider></Divider>
                        <MenuItem
                            justifyContent="center"
                            onClick={() => {
                                window.open(links.telegramCN);
                            }}
                        >
                            中文
                        </MenuItem>
                        <MenuItem
                            justifyContent="center"
                            onClick={() => {
                                window.open(links.telegramEN);
                            }}
                        >
                            English
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
    ) : (
        <Flex ref={ref}>
            <Link target="_blank" href={link} rel="noreferrer">
                <Icon isHovering={isHovering} />
            </Link>
        </Flex>
    );
};

export default React.memo(MediaButton);
