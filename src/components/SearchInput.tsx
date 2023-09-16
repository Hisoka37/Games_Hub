import { Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import React from "react";
import { FcSearch } from "react-icons/fc";

export const SearchInput = () => (
    <InputGroup>
    <InputLeftElement children={<FcSearch />} />
  <Input borderRadius={20} placeholder="Search Games.." variant="filled" />
    </InputGroup>
);
