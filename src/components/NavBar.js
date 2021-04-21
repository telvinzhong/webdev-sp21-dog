import {Nav, Navbar} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'
import userService from '../services/user-service'

const NavBar = () => {
    const [currentUser, setCurrentUser] = useState({})
    const [statusCode, setStatusCode] = useState('')
    useEffect(() => {
        userService.profile()
            .then((currentUser) => {
                setCurrentUser(currentUser)
            })
    }, [statusCode])


    // console.log('current user in navbar:', currentUser)
    return(
        <div>
        {/*Current User: {JSON.stringify(currentUser)},*/}
        {/*{statusCode && <p>logout successfully</p>}*/}
        {/*<button*/}
        {/*        onClick={logout}*/}
        {/*        className="btn btn-primary">*/}
        {/*        Logout*/}
        {/*</button>*/}
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Pocket Dog</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/search">Search</Nav.Link>
                {JSON.stringify(currentUser)!==JSON.stringify({})&& <Nav.Link href="/profile">Profile</Nav.Link>}
                {JSON.stringify(currentUser)===JSON.stringify({})&&<Nav.Link href="/login">Login</Nav.Link>}
                {JSON.stringify(currentUser)!==JSON.stringify({})&&<Nav.Link href="/logout">Logout</Nav.Link>}
                {JSON.stringify(currentUser)===JSON.stringify({})&&<Nav.Link href="/register">Register</Nav.Link>}
            </Nav>


        </Navbar>
        </div>
    )
}

export default NavBar