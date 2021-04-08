// import React from 'react'
// import {Link} from "react-router-dom";
//
// const Home = () => {
//     return(
//         <div>
//             <h1>Home</h1>
//             <Link to="/search">
//                 Search
//             </Link>
//             <br/>
//             <Link to="/details">
//                 Detail
//             </Link>
//             <br/>
//             <Link to="/login">
//                 Login
//             </Link>
//         </div>
//     )
// }
//
// export default Home

import React from 'react'
import logo from './dog-home.png';
import {Link} from "react-router-dom";
import { Button, Navbar, Nav, Image } from 'react-bootstrap'
import { Picture } from 'react-responsive-picture';
import NavBar from "./NavBar";
const Home = () => {
    return(
        <div>
            {/*<Navbar bg="dark" variant="dark">*/}
            {/*    <Navbar.Brand href="#home">Pocket Dog</Navbar.Brand>*/}
            {/*    <Nav className="mr-auto">*/}
            {/*        <Nav.Link href="/search">Search</Nav.Link>*/}
            {/*        <Nav.Link href="#features">Profile</Nav.Link>*/}
            {/*        <Nav.Link href="/login">Login</Nav.Link>*/}
            {/*        <Nav.Link href="/register">Register</Nav.Link>*/}
            {/*    </Nav>*/}
            {/*    /!*<Form inline>*!/*/}
            {/*    /!*    <FormControl type="text" placeholder="Search" className="mr-sm-2" />*!/*/}
            {/*    /!*    <Button variant="outline-info">Search</Button>*!/*/}
            {/*    /!*</Form>*!/*/}
            {/*</Navbar>*/}
            <NavBar/>
            {/*<Image className="photo" src="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=740&h=416"  />*/}
            <img className="photo" src={logo} alt="logo"/>
            {/*<Picture className="photo" src="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=740&h=416"  />*/}
        </div>




    )
}

export default Home