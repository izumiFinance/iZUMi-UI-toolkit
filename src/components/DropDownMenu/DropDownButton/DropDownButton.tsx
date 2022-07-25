import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuList, Image, Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
type DropDownButtonProps = {
    page: any;
    img?: string;
};
export const DropDownButton: React.FC<DropDownButtonProps> = (props) => {
    const { page, img } = props;

    const imgUrl = process.env.PUBLIC_URL + `/assets/sidebar/${img}`;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="inherit">
                {page.name}
            </MenuButton>
            <MenuList>
                {page.children.map((child) =>
                    child.address?.startsWith('http') ? (
                        <Link
                            key={child.name + child.address}
                            href={child.address}
                            rel="noreferrer"
                            display="block"
                            fontFamily="Montserrat-Medium"
                            fontSize="13px"
                            pt="13px"
                            pb="11px"
                            pl="27px"
                            mr="34px"
                            target="_blank"
                        >
                            {child.name}
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
