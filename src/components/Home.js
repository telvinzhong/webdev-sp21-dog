
import React from 'react'
// import logo from './dog-home.png';
import logo from './home2.png';
import NavBar from "./NavBar";
import {Text} from "@chakra-ui/react";
const Home = () => {
    return(
        <div>
            <NavBar/>
            {/*<div style="margin-top:-30px;">*/}
            {/*</div>*/}
            {/*<img className="photo" src={logo} alt="logo"/>*/}
            <div className="card"
                 // style={{backgroundImage: `url("https://static9.depositphotos.com/1022647/1081/v/600/depositphotos_10813712-stock-illustration-background-animal-footprints.jpg")`}}>
                 // style={{backgroundImage: `url("https://cdn.sandbergwallpaper.com/wp-content/uploads/2020/11/237-21_1.jpg")`,height: '100vh'}}
                 style={{backgroundImage: `url("https://cdn.sandbergwallpaper.com/wp-content/uploads/2020/11/237-21_1.jpg")`,height: '100vh'}}>
                <div className="row g-0">
                    {/*<div className="col-md-4 mt-5 mr-4 mr-sm-4 mr-md-0 pl-5">*/}
                    <div className="col-md-4 mt-5 mr-4 mr-sm-4 mr-md-0 pl-5">
                        <img className="photo" src={logo} alt="logo"/>
                        {/*<img className="img float-right" src={dog[0].url}/>*/}

                    </div>
                    <div className="col-md-8 pl-5 mt-5">
                        <div className="card-body text-center">

                            <div className="card-title">
                                {/*<h1 className="card-title h1">Hi! Welcome! Our mission is to create centralized online dog community*/}
                                <br/>
                                <br/>
                                <br/>
                                {/*    for both existing and potential dog owners to learn about and trade pictures of dogs</h1>*/}
                                <Text fontSize='35px' fontWeight='bold' color='white' as='em'>The goal of this project is to create an online dog community
                                    for both existing and potential dog owners to discover, share, and discuss all things dog related.
                                    Users can find information on dog breeds, and interact with one another by leaving comments on the pages of their favorite dogs.

                                </Text>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

