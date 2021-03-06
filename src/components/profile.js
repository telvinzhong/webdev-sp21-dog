import React, {useEffect, useState} from 'react'
import NavBar from "./NavBar";
import userService from "../services/user-service";
import commentService from "../services/comment-service";
import CommentRowProfile from "./commentRow-profile";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Stack,
    Text,
    VStack, Select,
    useToast
} from "@chakra-ui/react";
import {useParams} from "react-router-dom";

const Profile = () => {
    const {userName} = useParams()
    const toast = useToast()
    const [editing, setEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [statusCode, setStatusCode] = useState('');
    const [otherUser, setOtherUser] = useState({});
    const [comments, setComments] = useState([]);
    useEffect(() => {
        if(userName){
            userService.otherProfile(userName)
                .then((otherUser) => {
                    console.log("otheruser is:", otherUser)
                    setOtherUser(otherUser)
                    commentService.findCommentsByUserName(otherUser.userName)
                        .then(comments => {
                                console.log(comments)
                                setComments(comments)
                            }
                        )
                })
        } else{
            userService.profile()
                .then((current) => {
                    setCurrentUser(current);
                    console.log('curent innnnnnnnnnn',current);
                    commentService.findCommentsByUserName(current.userName)
                        .then(comments => {
                                setComments(comments)
                            }
                        )
                })
        }

    }, [statusCode])

    // console.log('username is:', userName)
    // console.log('currentuser in profile:', currentUser)

    const updateprofile =(currentUser)=>{
        if (!(currentUser.userName && currentUser.password )) {
            toast({
                title: "Update profile failed",
                description: "All fields are required",
                status: "error",
                duration: 3000,
                isClosable: true
            });
            return;
        }
        if (currentUser.password.length < 3) {
            toast({
                title: "Sign up failed",
                description: "Password at least 3 digits",
                status: "error",
                duration: 3000,
                isClosable: true
            });
            return;
        }

        console.log('currentuser inside of updateprofile:', currentUser)
        userService.updateProfile(currentUser)

            .then((currentUser) => {
                setCurrentUser(currentUser)

            })
    }

    return(
        <div>
            <NavBar/>
            <VStack>
                <Text fontSize='70px' color='purple' as='ariel'>Profile</Text>
                <Box p="4" borderRadius='lg' width='lg'>


                    {
                        userName &&
                        <>
                            <FormControl mb='1rem'>
                                <FormLabel fontSize='20px'>Username</FormLabel>
                                <Input type="text" value={otherUser.userName}/>
                            </FormControl>

                            <FormControl mb='1rem'>
                                <FormLabel fontSize='20px'>I currently have a dog</FormLabel>
                                <Select value={otherUser.role}>
                                    <option>Yes</option>
                                    <option>No</option>
                                </Select>
                            </FormControl>

                        </>

                    }


                    {
                        !editing && !userName &&
                            <>
                                <FormControl mb='1rem'>
                                    <FormLabel fontSize='20px'>Username</FormLabel>
                                    <Input type="text" value={currentUser.userName}/>
                                </FormControl>

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

                                <Stack direction="column" spacing={7} align='center' pt='2rem'>
                                    <Button onClick={() => {

                                        setEditing(true)
                                        console.log('editing in edit profile', editing)
                                    }} colorScheme='purple' size='lg' width='xs'>Edit Profile</Button>
                                </Stack>


                            </>

                    }


                    {
                        editing && !userName &&
                        <>
                            <FormControl mb='1rem'>
                                <FormLabel fontSize='20px'>Username</FormLabel>
                                <Input type="text" value={currentUser.userName}/>
                            </FormControl>

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
                            <Stack direction="column" spacing={7} align='center' pt='2rem'>
                                <Button onClick={() => {
                                    updateprofile(currentUser)
                                    setEditing(false)
                                    console.log('editing in update profile', editing)
                                }} colorScheme='purple' size='lg' width='xs'>Update Profile</Button>
                            </Stack>


                        </>

                    }


                </Box>

                <div className="table-responsive">
                    <table className="table text-nowrap">
                        <thead>
                        <tr>
                            <th>Dog Id</th>
                            <th>Comments</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                comments.map((comment)=>

                                    <CommentRowProfile
                                        // editing={editingWidget.id === widget.id}
                                        comment={comment}
                                        userName = {userName}
                                    />
                                )

                            }

                        </tbody>
                    </table>
                </div>
            </VStack>

        </div>




    )
}

export default Profile