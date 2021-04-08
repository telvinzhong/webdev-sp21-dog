import {Nav, Navbar} from "react-bootstrap";
import React from "react";

const NavBar = () => {

    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Pocket Dog</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/search">Search</Nav.Link>
                <Nav.Link href="#features">Profile</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
            {/*<Form inline>*/}
            {/*    <FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
            {/*    <Button variant="outline-info">Search</Button>*/}
            {/*</Form>*/}
        </Navbar>
    )
}

export default NavBar