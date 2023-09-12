import React from 'react'
import useGenres from '../hooks/useGenres'
import { ListItem, Text, UnorderedList } from "@chakra-ui/react";


export const GenreList = () => {
   const { genres, error, isLaoding } = useGenres()

  return (
     <UnorderedList>
     {genres.map(genre => <ListItem key={genre.id}>{genre.name}</ListItem>)}
     </UnorderedList>
  )
}

