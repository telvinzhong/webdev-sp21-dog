import React, {useEffect, useState} from 'react'
import NavBar from "./NavBar";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Stack,
    Text,
    VStack, Select, InputGroup, InputRightElement
} from "@chakra-ui/react";

const InvalidProfile = () => {

    return(
        <div>
            <VStack>
                <Text fontSize='70px' color='black' as='em'>Please login in to see your profile</Text>

            </VStack>
        </div>




    )
}

export default InvalidProfile