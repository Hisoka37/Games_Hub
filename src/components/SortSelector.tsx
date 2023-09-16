import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { AiOutlineDown } from "react-icons/ai";

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

export const SortSelector = ({onSelectSortOrder, sortOrder}: Props) => {
  const sortOrders = [
    { value: "", label: "Relevence" },
    { value: "-added", label: "date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Realease date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<AiOutlineDown />}>
        Order By: {currentSortOrder?.label || 'Relevence'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
