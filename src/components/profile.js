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
    VStack, Select
} from "@chakra-ui/react";

const Profile = () => {
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    useEffect(() => {}, [password, role])
    return(
        <div>

            <NavBar/>
            <VStack>
                <Text fontSize='70px' color='purple' as='ariel'>Profile</Text>
                <Box p="4" borderRadius='lg' width='lg'>
                    <FormControl mb='1rem'>
                        <FormLabel fontSize='20px'>Username</FormLabel>
                        <Input type="text" value="Your Username"/>
                        {/*<Input/>*/}
                    </FormControl>
                    <FormControl mb='1rem'>
                        <FormLabel fontSize='20px'>Password</FormLabel>

                        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                    </FormControl>
                    <FormControl mb='1rem'>
                        <FormLabel fontSize='20px'>I currently have a dog</FormLabel>
                        <Select value={role} onChange={(e) => setRole(e.target.value)}>
                            <option>Yes</option>
                            <option>No</option>
                        </Select>
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