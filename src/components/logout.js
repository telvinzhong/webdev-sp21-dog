import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import userService from "../services/user-service";
import NavBar from "./NavBar";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement, Stack,
    Text,
    VStack
} from "@chakra-ui/react";

const Logout = () => {
    const [currentUser, setCurrentUser] = useState({})
    const [statusCode, setStatusCode] = useState('')
    useEffect(() => {
        userService.profile()
            .then((currentUser) => {
                setCurrentUser(currentUser)
            })
    }, [statusCode])

    const logout = () =>{
        userService.logout()
            .then((statusCode) => {

                setStatusCode(statusCode)
            })
    }

    console.log('current user in logout:', currentUser)
    return (
        <>
            <NavBar logout={logout()}/>
            <h1>You are safely logged out!</h1>
            {/*<button*/}
            {/*    onClick={logout}*/}
            {/*    className="btn btn-primary">*/}
            {/*    Logout*/}
            {/*</button>*/}

        </>

    )
}

export default Logout