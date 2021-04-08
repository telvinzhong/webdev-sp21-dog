import React, {useEffect, useState} from 'react'
import NavBar from "./NavBar";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Stack,
    Text,
    VStack
} from "@chakra-ui/react";

const Profile = () => {
    const [password, setPassword] = useState('');
    useEffect(() => {}, [password])
    return(
        <div>

            <NavBar/>
            <VStack>
                <Text fontSize='70px' color='purple' as='ariel'>Profile</Text>
                <Box p="4" borderRadius='lg' width='lg'>
                    <FormControl mb='1rem'>
                        <FormLabel fontSize='20px'>Username</FormLabel>
                        <Input type="text" value="Your Username"/>
                    </FormControl>
                    <FormControl mb='1rem'>
                        <FormLabel fontSize='20px'>Password</FormLabel>

                        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                    </FormControl>
                    <Stack direction="column" spacing={7} align='center' pt='2rem'>
                        <Button colorScheme='purple' size='lg' width='xs'>Update</Button>
                    </Stack>

                </Box>
            </VStack>
        </div>




    )
}

export default Profile