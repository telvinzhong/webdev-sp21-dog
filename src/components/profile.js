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
    const [currentUser, setCurrentUser] = useState({})
    const [statusCode, setStatusCode] = useState('')
    useEffect(() => {
        userService.profile()
            .then((currentUser) => {
                setCurrentUser(currentUser)
            })
    }, [statusCode])
    // console.log('currentuser in profile', currentUser.userName)
    return(
        <div>
            <NavBar/>
            <VStack>
                <Text fontSize='70px' color='purple' as='ariel'>Profile</Text>
                <Box p="4" borderRadius='lg' width='lg'>
                    <FormControl mb='1rem'>
                        <FormLabel fontSize='20px'>Username</FormLabel>
                        <Input type="text" value={currentUser.userName}/>
                        {/*<Input/>*/}
                    </FormControl>

                    <FormControl mb='1rem'>
                        <FormLabel fontSize='20px'>Password</FormLabel>

                        <Input type="password" value={currentUser.password} onChange={(e) => setPassword(e.target.value)}/>

                    </FormControl>

                    <FormControl mb='1rem'>
                        <FormLabel fontSize='20px'>I currently have a dog</FormLabel>
                        <Select value={currentUser.role} onChange={(e) => {
                            setRole(e.target.value)
                            console.log(e.target.value)
                        }}>
                            <option>Yes</option>
                            <option>No</option>
                        </Select>
                    </FormControl>

                    <Stack direction="column" spacing={7} align='center' pt='2rem'>
                        <Button colorScheme='purple' size='lg' width='xs'>Update Profile</Button>
                    </Stack>
                    {/*<Stack direction="column" spacing={7} align='center' pt='2rem'>*/}
                    {/*    <Button colorScheme='purple' size='lg' width='xs'>Your commented dogs</Button>*/}
                    {/*</Stack>*/}
                </Box>
                {/*{*/}
                {/*    // editing &&*/}
                {/*    <div>*/}
                {/*        <i onClick={() => {*/}
                {/*            // deleteWidget(_widget)}*/}
                {/*        } className="fas fa-trash float-right"></i>*/}
                {/*        <i onClick={() => {*/}
                {/*            // updateWidget(widget)*/}
                {/*            // setEditing(false)*/}
                {/*            // console.log("inside update: ", widget)*/}

                {/*        }} className="fas fa-check float-right"></i>*/}

                {/*     */}
                {/*        <textarea*/}
                {/*            // onChange={(e) => setWidget({...widget, text: e.target.value})}*/}
                {/*            // value={widget.text}*/}
                {/*            className="form-control"></textarea>*/}
                {/*    </div>*/}
                {/*}*/}
                {/*{*/}
                {/*    // !editing &&*/}
                {/*    <div>*/}
                {/*        <i onClick={() => {*/}
                {/*            // setEditing(true)*/}

                {/*        }} className="fas fa-cog float-right"></i>*/}
                {/*        <p>*/}
                {/*            /!*{_widget.text}*!/*/}
                {/*            This is the dog you like*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*}*/}

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