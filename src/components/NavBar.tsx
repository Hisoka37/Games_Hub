import React from 'react'
import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/website logo.png'

export const Navbar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize= '80px'  />
        <Text> Home </Text>
    </HStack>
  )
}
