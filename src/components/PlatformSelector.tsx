import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

export const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<AiOutlineDown />}>
        {selectedPlatform?.name || 'Platform'}
      </MenuButton>
      <MenuList>
        {data.map((platfrom) => (
          <MenuItem
            onClick={() => onSelectPlatform(platfrom)}
            key={platfrom.id}
          >
            {platfrom.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
