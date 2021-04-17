import React, {useEffect, useState} from 'react'
import NavBar from "./NavBar";
import userService from "../services/user-service";
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
    const [editing, setEditing] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const [statusCode, setStatusCode] = useState('')
    useEffect(() => {
        userService.profile()
            .then((currentUser) => {
                setCurrentUser(currentUser)
            })
    }, [statusCode])

    console.log('currentuser in profile:', currentUser)
    return(
        <div>
            <NavBar/>
            <VStack>
                <Text fontSize='70px' color='purple' as='ariel'>Profile</Text>
                <Box p="4" borderRadius='lg' width='lg'>
                    <FormControl mb='1rem'>
                        <FormLabel fontSize='20px'>Username</FormLabel>
                        <Input type="text" value={currentUser.userName}/>
                    </FormControl>
                    {
                        !editing &&
                            <>
                                <FormControl mb='1rem'>
                                    <FormLabel fontSize='20px'>Password</FormLabel>
                                    <Input type="password" value={currentUser.password}/>
                                </FormControl>

                                <FormControl mb='1rem'>
                                    <FormLabel fontSize='20px'>I currently have a dog</FormLabel>
                                    <Select value={currentUser.role}>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Select>
                                </FormControl>
                            </>

                    }

                    {
                        editing &&
                        <>
                            <FormControl mb='1rem'>
                                <FormLabel fontSize='20px'>Password</FormLabel>
                                <Input type="password" onChange={(e) => setCurrentUser({...currentUser, password: e.target.value})}
                                       value={currentUser.password}/>
                            </FormControl>

                            <FormControl mb='1rem'>
                                <FormLabel fontSize='20px'>I currently have a dog</FormLabel>
                                <Select
                                    onChange={(e) => {
                                    setCurrentUser( currentUser=>  ({...currentUser, role: e.target.options[e.target.selectedIndex].value}))
                                    console.log(e.target.options[e.target.selectedIndex].value)

                                }}
                                    value={currentUser.role}>
                                    <option value={'Yes'}>Yes</option>
                                    <option value={'No'}>No</option>
                                </Select>
                            </FormControl>
                        </>

                    }




                    <Stack direction="column" spacing={7} align='center' pt='2rem'>
                        <Button onClick={() => {setEditing(true)}} colorScheme='purple' size='lg' width='xs'>Edit Profile</Button>
                    </Stack>

                    <Stack direction="column" spacing={7} align='center' pt='2rem'>
                        <Button colorScheme='purple' size='lg' width='xs'>Update Profile</Button>
                    </Stack>

                </Box>

                <div className="table-responsive">
                    <table className="table text-nowrap">
                        <thead>
                        <tr>
                            <th>Dog Name</th>
                            <th>Comments</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Husky</td>
                            <td><textarea>Good dog.</textarea></td>
                            <i onClick={() => {
                                // setEditing(true)
                            }} className="fas fa-cog"></i>
                        </tr>
                        <tr>
                            <td>Akbash Dog</td>
                            <td><textarea>I like it!</textarea></td>
                            <i onClick={() => {
                                // setEditing(true)
                            }} className="fas fa-cog"></i>
                        </tr>
                        <tr>
                            <td>American Bulldog</td>
                            <td><textarea>Tell me more.</textarea></td>
                            <i onClick={() => {
                                // setEditing(true)
                            }} className="fas fa-cog"></i>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </VStack>

        </div>




    )
}

export default Profile