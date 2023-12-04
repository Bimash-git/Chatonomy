import React from 'react'
import {
    Container,
    Box,
    Text,
    Tabs,
    TabList,
    TabPanel,
    TabPanels,
    Tab
} from '@chakra-ui/react';
import Signup from './Signup';
import Login from './Login';

export default function Authenticator() {
    return (
        <Container maxW="xl" centerContent className='background-all'>
            <Box
                display="flex"
                justifyContent="center"
                p={3}
                bg="#fef7e5"
                w="100%"
                m="40px 0 15px 0"
                borderRadius="md"
                borderWidth="1px"
            >
                <Text fontSize="xl">Chatonomyyy</Text>
            </Box>
            <Box
                bg="#fef7e5"
                w="100%"
                p={4}
                borderRadius="md"
                borderWidth="1px"
            >
                <Tabs isFitted variant='enclosed'>
                    <TabList mb='1em'>
                        <Tab>Login</Tab>
                        <Tab></Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}
