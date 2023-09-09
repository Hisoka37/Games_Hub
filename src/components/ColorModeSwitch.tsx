import { HStack, Switch, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineDarkMode } from 'react-icons/md'

export const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode()
  return (
    <HStack>
        <Switch colorScheme='green' isChecked = {colorMode === 'dark'} onChange={toggleColorMode} />
         <MdOutlineDarkMode />
    </HStack>
  )
}
