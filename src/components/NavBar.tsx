import React from 'react'
import { Button, HStack, Image, Text, useColorMode } from "@chakra-ui/react"
import logo from '../assets/website logo.png'

export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack>
        <Image src={logo} boxSize= '80px'  />
        <Text> Home </Text>
        <Button onClick={toggleColorMode}>
         {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </HStack>
  )
}
