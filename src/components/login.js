import React from 'react'
import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import userService from '../services/user-service'
import {
    Text,
    VStack,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    FormControl,
    FormLabel,
    Box,
    Stack,
    useToast,
} from "@chakra-ui/react"
import NavBar from "./NavBar";

/**
 * The sign in component which allows users to sign in with their username and password
 */
// export default function SignIn() {
//     const [show, setShow] = React.useState(false)
//     const handleClick = () => setShow(!show)
//     const [userName, setUserName] = React.useState('');
//     const [password, setPassword] = React.useState('');
//     const toast = useToast();

//     const handleLogIn = async () => {
//         if (!(userName && password)) {
//             toast({
//                 title: "Sign in failed",
//                 description: "Please complete all required fields",
//                 status: "error",
//                 duration: 3000,
//                 isClosable: true
//             });
//             return;
//         }
//     }

//     return (
//         <>
//             <NavBar/>
//             <VStack>
//                 <Text fontSize='70px' color='tomato' as='em'>Login</Text>
//                 <Box p="4" borderRadius='lg' width='lg'>
//                     <FormControl mb='4rem'>
//                         <FormLabel fontSize='30px'>Username</FormLabel>
//                         <Input variant="flushed" value={userName} onChange={(e) => {setUserName(e.target.value)}}/>
//                         <FormLabel mt='50px' fontSize='30px'>Password</FormLabel>
//                         <InputGroup>
//                             <Input type={show ? "text" : "password"} variant="flushed" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
//                             <InputRightElement width="4rem" pb='10px'>
//                                 <Button onClick={handleClick} size='sm'>{show ? "Hide" : "Show"}</Button></InputRightElement>
//                         </InputGroup>
//                         <Stack direction="column" mt='3rem' align='center'>
//                             <Button colorScheme='teal' size='lg' width='xs' onClick={handleLogIn}>Sign in</Button>
//                         </Stack>
//                     </FormControl>
//                 </Box>
//             </VStack>

//         </>

//     )
// }

const Login = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const [credentials, setCredentials] = useState({userName: '', password: ''})
    const history = useHistory()
    const login = () => {
        userService.login(credentials)
            .then((user) => {
                if(user === 0) {
                    alert("login failed, try again")
                } else {
                    history.push("/profile")
                }
            })
        history.push("/profile")
    }

    return (
        <>
            <NavBar/>
            <VStack>
                <Text fontSize='70px' color='tomato' as='em'>Login</Text>
                <Box p="4" borderRadius='lg' width='lg'>
                    <FormControl mb='4rem'>
                        <FormLabel fontSize='30px'>Username</FormLabel>
                        <Input variant="flushed" value={credentials.userName} onChange={(e) => {setCredentials({...credentials, userName: e.target.value})}}/>
                        <FormLabel mt='50px' fontSize='30px'>Password</FormLabel>
                        <InputGroup>
                            <Input type={show ? "text" : "password"} variant="flushed" value={credentials.password} onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}/>
                            <InputRightElement width="4rem" pb='10px'>
                                <Button onClick={handleClick} size='sm'>{show ? "Hide" : "Show"}</Button></InputRightElement>
                        </InputGroup>
                        <Stack direction="column" mt='3rem' align='center'>
                            <Button colorScheme='teal' size='lg' width='xs' onClick={login}>Sign in</Button>
                        </Stack>
                    </FormControl>
                </Box>
            </VStack>

        </>

    )
}

export default Login