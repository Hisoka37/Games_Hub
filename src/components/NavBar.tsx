import React from 'react'
import {  HStack, Image, Switch, Text, useColorMode } from "@chakra-ui/react"
import logo from '../assets/website logo.png'
import { ColorModeSwitch } from './ColorModeSwitch'
import { SearchInput } from './SearchInput'

export const Navbar = () => {
    const { toggleColorMode, colorMode } = useColorMode()
  return (
    <HStack justifyContent='space-between' padding= '10px'>
        <Image src={logo} boxSize= '80px'  />
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
  )
}
