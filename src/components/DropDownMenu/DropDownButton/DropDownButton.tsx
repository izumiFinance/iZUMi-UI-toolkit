import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuList, Image, Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { a_display } from '../../../style';
type DropDownButtonProps = {
    page: any;
};
export const DropDownButton: React.FC<DropDownButtonProps> = (props) => {
    const { page } = props;

    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                bg="inherit"
                className={a_display}
                color="tertiary.50"
                _hover={{ background: '#8A73FF' }}
                _active={{ background: '#8A73FF' }}
            >
                {page.name}
            </MenuButton>
            <MenuList bg="rgba(20, 2, 51, 0.87);">
                {page.children.map((child: any) =>
                    child.address?.startsWith('http') ? (
                        <Link key={child.name + child.address} target="_blank" to={{ pathname: child.address }}>
                            <Box
                                display="block"
                                fontFamily="Montserrat-Medium"
                                fontSize="13px"
                                pt="13px"
                                mr="34px"
                                pl="27px"
                                pb="11px"
                                target="_blank"
                                color="tertiary.50"
                            >
                                <Flex>
                                    <Image boxSize="20px" mr="14px" src={child.icon}></Image>

                                    {child.name}
                                </Flex>
                            </Box>
                        </Link>
                    ) : (
                        <Link to={child.address as string} key={child.name + child.address}>
                            <Box
                                display="block"
                                fontSize="13px"
                                fontFamily="Montserrat-Medium"
                                pt="13px"
                                mr="34px"
                                pl="27px"
                                pb="11px"
                                //fontWeight="bold"
                                target="_blank"
                                color="tertiary.50"
                            >
                                <Flex>
                                    <Image boxSize="20px" mr="14px" src={child.icon}></Image>
                                    {child.name}
                                </Flex>
                            </Box>
                        </Link>
                    )
                )}
            </MenuList>
        </Menu>
    );
};
