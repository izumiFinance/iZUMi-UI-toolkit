import { Flex, Menu, MenuButton, MenuItem, MenuList, Text, useColorMode, VStack, Image, useOutsideClick } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { i_text_copy, i_text_d } from '../../style';
import { getColorThemeSelector } from '../../utils/funcs';

export type TabBarProps = {
    config: any;
};

export const TabBar: React.FC<TabBarProps> = (pros) => {
    const { config } = pros;
    const colorTheme = getColorThemeSelector(useColorMode().colorMode);
    const [isOpenList, setOpenList] = useState(Array(config.pages.length).fill(false));
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const getImgUrl = (img: string | undefined) => {
        return colorTheme(process.env.PUBLIC_URL + `/assets/tabBar/light${img}`, process.env.PUBLIC_URL + `/assets/tabBar/dark${img}`);
    };
    const getSelectedImgUrl = (img: string | undefined) => {
        return colorTheme(
            process.env.PUBLIC_URL + `/assets/tabBar/selected/light${img}`,
            process.env.PUBLIC_URL + `/assets/tabBar/selected/dark${img}`
        );
    };
    const history = useHistory();
    const listFocusRef = React.useRef<any | null>(null);
    useOutsideClick({
        ref: listFocusRef,
        handler: () => {
            const temp = Array(config.pages.length).fill(false);
            setOpenList(temp);
        },
    });
    let clickChildren = false;
    return (
        <Flex w="100%" h="50px" bgColor={colorTheme('#ffffff', '#292343')} zIndex="1" position="fixed" bottom="0px" ref={listFocusRef}>
            {config.pages.map((page: any, index: number) => {
                return (
                    <Flex
                        key={index}
                        w={100 / config.pages.length + '%'}
                        onClick={() => {
                            const temp = Array(config.pages.length).fill(false);
                            temp[index] = !isOpenList[index];
                            setOpenList(temp);
                            if (page.address) {
                                setSelectedIndex(index);
                                if (!clickChildren) {
                                    history.push(page.address);
                                }
                            }
                        }}
                    >
                        <Menu isOpen={isOpenList[index]} key={index}>
                            <MenuButton w="100%">
                                <VStack>
                                    <Image
                                        boxSize="20px"
                                        src={selectedIndex === index ? getSelectedImgUrl(page.img) : getImgUrl(page.img)}
                                        fallbackSrc={getImgUrl(page.img)}
                                    ></Image>
                                    <Text className={i_text_copy} mt="3px !important">
                                        {page.name}
                                    </Text>
                                </VStack>
                            </MenuButton>
                            <MenuList
                                minW="130px"
                                w="100%"
                                className={i_text_d}
                                bg={colorTheme('#FBFBFB', '#100C1E')}
                                position="relative"
                                fontSize="13px"
                            >
                                {page.children.map((children: any, i: number) => {
                                    return (
                                        <MenuItem
                                            key={i}
                                            justifyContent="center"
                                            onClick={() => {
                                                setSelectedIndex(index);
                                                if (children.address) {
                                                    if (children.address.slice(0, 4) === 'http') {
                                                        window.open(children.address);
                                                    } else {
                                                        if (page.address) {
                                                            clickChildren = true;
                                                        } else {
                                                            clickChildren = false;
                                                        }
                                                        history.push(children.address);
                                                    }
                                                }
                                            }}
                                        >
                                            <Text>{children.name}</Text>
                                        </MenuItem>
                                    );
                                })}
                            </MenuList>
                        </Menu>
                    </Flex>
                );
            })}
        </Flex>
    );
};
