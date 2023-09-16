import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react'
import { AiOutlineDown } from 'react-icons/ai';

export const SortSelector = () => {
    return (
        <Menu>
          <MenuButton as={Button} rightIcon={<AiOutlineDown />}>
            Sort by:
          </MenuButton>
          <MenuList>
             <MenuItem>Relevence</MenuItem>
             <MenuItem>Date added</MenuItem>
             <MenuItem>name</MenuItem>
             <MenuItem> Releice date</MenuItem>
             <MenuItem> Popularity</MenuItem>
             <MenuItem>Average Rating</MenuItem>
          </MenuList>
        </Menu>
      );
}
