import React from 'react'
import useGenres from '../hooks/useGenres'
import { ListItem, Text, UnorderedList } from "@chakra-ui/react";
import useData from '../hooks/useData';


export const GenreList = () => {
   const { data} = useGenres();

  return (
     <UnorderedList>
     {data.map(genre => <ListItem key={genre.id}>{genre.name}</ListItem>)}
     </UnorderedList>
  )
}

