import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { AiOutlineDown } from 'react-icons/ai'
import usePlatforms from '../hooks/usePlatforms'

export const PlatformSelector = () => {

    const { data, error } = usePlatforms();
   if ( error ) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<AiOutlineDown />}> Platofrms </MenuButton>
        <MenuList>
          {data.map(platfrom => <MenuItem key={platfrom.id}>{platfrom.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}
