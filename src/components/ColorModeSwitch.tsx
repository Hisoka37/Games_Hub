import { HStack, Switch, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineDarkMode, MdOutlineLightMode} from 'react-icons/md'

export const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode()
  return (
    <HStack>
        <Switch colorScheme='green' isChecked = {colorMode === 'dark'} onChange={toggleColorMode} />
         {colorMode === 'dark' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />   }
    </HStack>
  )
}
