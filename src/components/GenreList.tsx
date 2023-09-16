import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { HStack, List, ListItem, Image, Spinner, Button } from "@chakra-ui/react";
import useData from "../hooks/useData";
import getCroppedImageUrl from "../services/image-ur";

interface Props {
   onSelectGenre: (genre: Genre) => void;
   selectedGenre: Genre | null
}

export const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
  const { data, isLaoding } = useGenres();

  return (
    <List paddingY={30}>
      {isLaoding && <Spinner color='red.500' />}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize="34px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() =>onSelectGenre(genre)} fontSize= 'lg' variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
