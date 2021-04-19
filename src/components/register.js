import React, {useState, useEffect} from "react"
import {Link, useHistory} from 'react-router-dom'
import userService from '../services/user-service'
import {
    VStack,
    Input,
    Button,
    FormControl,
    FormLabel,
    Box,
    Stack,
    Heading,
    Select,
    useToast,
} from "@chakra-ui/react"
import NavBar from "./NavBar";


/**
 * The sign up component which allows users to create an account, including username, password, email, gender, age and city
 */
// const SignUp = () => {

//     const [userName, setUserName] = useState('');
//     const [password, setPassword] = useState('');
//     const [passwordToMatch, setPasswordToMatch] = useState('');
//     const [invalid, setInvalid] = useState(false);
//     const [role, setRole] = useState('');
//     const toast = useToast();

//     useEffect(() => {
//         if (password !== passwordToMatch) {
//             setInvalid(true);
//         } else {
//             setInvalid(false);
//         }
//     }, [passwordToMatch, password])

//     const handleSignUp = async () => {
//         if (!(userName && password && passwordToMatch)) {
//             toast({
//                 title: "Sign up failed",
//                 description: "Please complete all required fields",
//                 status: "error",
//                 duration: 3000,
//                 isClosable: true
//             });
//             return;
//         }
//         if (invalid === true) {
//             toast({
//                 title: "Sign up failed",
//                 description: "Password does not match",
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
//                 <Heading fontSize='70px' color='greenyellow' fontStyle='italic'>Register</Heading>
//                 <Box p="4" borderRadius='lg' width='lg'>
//                     <FormControl mb='1rem' isRequired>
//                         <FormLabel fontSize='20px'>Username</FormLabel>
//                         <Input value={userName} onChange={(e) => setUserName(e.target.value)}/>
//                     </FormControl>
//                     <FormControl mb='1rem' isRequired>
//                         <FormLabel fontSize='20px'>Password</FormLabel>
//                         <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
//                     </FormControl>
//                     <FormControl mb='1rem' isRequired>
//                         <FormLabel fontSize='20px'>Re-enter Password</FormLabel>
//                         <Input type="password" value={passwordToMatch} onChange={(e) => setPasswordToMatch(e.target.value)} isInvalid={invalid}/>
//                     </FormControl>
//                     <FormControl mb='1rem'>
//                         <FormLabel fontSize='20px'>Roles</FormLabel>
//                         <Select placeholder="Do you currently own a dog?" value={role} onChange={(e) => setRole(e.target.value)}>
//                             <option>Yes</option>
//                             <option>No</option>
//                         </Select>
//                     </FormControl>
//                     <Stack direction="column" spacing={7} align='center' pt='2rem'>
//                         <Button colorScheme='green' size='lg' width='xs' onClick={handleSignUp}>Sign up</Button>
//                     </Stack>
//                 </Box>
//             </VStack>
//         </>
//     )
// }
// export default SignUp

const SignUp = () => {

    const [credentials, setCredentials] = useState({userName: '', password: '', role: ''})
    const history = useHistory()
    const toast = useToast()
    const signup = () => {
        if (!(credentials.userName && credentials.password )) {
            toast({
                title: "Sign up failed",
                description: "Please complete all required fields",
                status: "error",
                duration: 3000,
                isClosable: true
            });
            return;
        }
        if (credentials.password.length < 3) {
            toast({
                title: "Sign up failed",
                description: "Password at least 3 digits",
                status: "error",
                duration: 3000,
                isClosable: true
            });
            return;
        }

            userService.signup(credentials)
                .then((user) => {
                    if (user !== 0) {
                        toast({
                            title: "Sign up successful",
                            description: "try login",
                            status: "success",
                            duration: 3000,
                            isClosable: true
                        });
                        // history.push("/profile")
                    }
                    else {
                        toast({
                            title: "Sign up failed",
                            description: "username already taken",
                            status: "error",
                            duration: 3000,
                            isClosable: true
                        });
                    }
                })



    }

    // const [userName, setUserName] = useState('');
    // const [password, setPassword] = useState('');
    // const [passwordToMatch, setPasswordToMatch] = useState('');
    // const [invalid, setInvalid] = useState(false);
    // const [role, setRole] = useState('');
    // const toast = useToast();

    // useEffect(() => {
    //     if (password !== passwordToMatch) {
    //         setInvalid(true);
    //     } else {
    //         setInvalid(false);
    //     }
    // }, [passwordToMatch, password])

    // const handleSignUp = async () => {
    //     if (!(userName && password && passwordToMatch)) {
    //         toast({
    //             title: "Sign up failed",
    //             description: "Please complete all required fields",
    //             status: "error",
    //             duration: 3000,
    //             isClosable: true
    //         });
    //         return;
    //     }
    //     if (invalid === true) {
    //         toast({
    //             title: "Sign up failed",
    //             description: "Password does not match",
    //             status: "error",
    //             duration: 3000,
    //             isClosable: true
    //         });
    //         return;
    //     }
    // }

    return (
        <>
            <NavBar/>
            <VStack>
                <Heading fontSize='70px' color='greenyellow' fontStyle='italic'>Register</Heading>
                <Box p="4" borderRadius='lg' width='lg'>
                    <FormControl mb='1rem' isRequired>
                        <FormLabel fontSize='20px'>Username</FormLabel>
                        <Input value={credentials.userName} onChange={(e) => {setCredentials({...credentials, userName: e.target.value})}}/>
                    </FormControl>
                    <FormControl mb='1rem' isRequired>
                        <FormLabel fontSize='20px'>Password</FormLabel>
                        <Input type="password" value={credentials.password} onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}/>
                    </FormControl>
                    {/* <FormControl mb='1rem' isRequired>
                        <FormLabel fontSize='20px'>Re-enter Password</FormLabel>
                        <Input type="password" value={passwordToMatch} onChange={(e) => setPasswordToMatch(e.target.value)} isInvalid={invalid}/>
                    </FormControl> */}
                    <FormControl mb='1rem'>
                        <FormLabel fontSize='20px'>Roles</FormLabel>
                        <Select placeholder="Do you currently own a dog?" value={credentials.role} onChange={(e) => {setCredentials({...credentials, role: e.target.value})}}>
                            <option>Yes</option>
                            <option>No</option>
                        </Select>
                    </FormControl>
                    <Stack direction="column" spacing={7} align='center' pt='2rem'>
                        <Button colorScheme='green' size='lg' width='xs' onClick={signup}>Sign up</Button>
                    </Stack>
                </Box>
            </VStack>
        </>
    )
}
export default SignUp