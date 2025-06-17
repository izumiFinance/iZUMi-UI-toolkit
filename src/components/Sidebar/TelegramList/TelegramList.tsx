import { Flex, Menu, MenuItem } from '@chakra-ui/react';
import { useHover } from '../../../hooks/useHover';
import { useState } from 'react';
import { links } from '../../../config/links';
import { i_text_d } from '../../../style';
import { getColorThemeSelector } from '../../../utils/funcs';
import { useTheme } from 'next-themes';
interface Props {
    Icon: React.FC<{
        isHovering: boolean;
    }>;
}
export const TelegramList: React.FC<Props> = ({ Icon }) => {
    const [ref, isHovering] = useHover<HTMLDivElement>();
    const { theme } = useTheme();
    const colorTheme = getColorThemeSelector(theme === 'dark' ? 'dark' : 'light');
    const [isOpenList, setOpenList] = useState(false);
    return (
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
            <Flex mt="-10px" pt="12px">
                <Icon isHovering={isHovering} />
            </Flex>
            <Flex zIndex="1">
                <Menu.Root open={isOpenList} onOpenChange={setOpenList}>
                    <Menu.Trigger>
                        <div />
                    </Menu.Trigger>
                    <Menu.Content>
                        <Menu.Item
                            onClick={() => {
                                window.open(links.telegramChannel);
                            }}
                        >
                            Channel
                        </Menu.Item>
                        <Menu.Separator />
                        <Menu.Item
                            onClick={() => {
                                window.open(links.telegramCN);
                            }}
                        >
                            中文
                        </Menu.Item>
                        <Menu.Item
                            justifyContent="center"
                            onClick={() => {
                                window.open(links.telegramEN);
                            }}
                        >
                            English
                        </Menu.Item>
                    </Menu.Content>
                </Menu.Root>
            </Flex>
        </Flex>
    );
};
