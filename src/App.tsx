import * as React from 'react';
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme, ColorModeScript } from '@chakra-ui/react';
import ColorModeSelect from './components/Sidebar/ColorModeSelect/ColorModeSelect';

export const App = () => (
    <>
        <ColorModeScript initialColorMode="dark" />

        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" p={3}>
                    <VStack spacing={8}>
                        <ColorModeSelect showNav={true}></ColorModeSelect>
                        <Text>
                            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
                        </Text>
                        <Link color="teal.500" href="https://chakra-ui.com" fontSize="2xl" target="_blank" rel="noopener noreferrer">
                            Learn Chakra
                        </Link>
                    </VStack>
                </Grid>
            </Box>
        </ChakraProvider>
    </>
);
