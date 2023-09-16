import { Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { FcSearch } from "react-icons/fc";

interface Props {
    onSearch: (searchText: string) => void;
}

export const SearchInput = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<FcSearch />} />
        <Input ref={ref}
          borderRadius={20}
          placeholder="Search Games.."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};
