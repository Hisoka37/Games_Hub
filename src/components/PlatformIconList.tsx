import { Game, Platform } from '../hooks/useGames'
import { HStack, Icon, Text } from '@chakra-ui/react';
import {FaWindows, FaPlaystation, FaXbox, FaLinux, FaApple, FaAndroid} from 'react-icons/fa';
import { MdPhoneIphone} from "react-icons/md"
import { SiNintendo} from 'react-icons/si'
import { BsGlobe} from 'react-icons/bs'
import { IconType } from 'react-icons/lib';

interface Props {
    platforms: Platform[];
}

export const PlatformIconList = ({platforms}: Props) => {
    
    const icons: {[key: string]: IconType} =  {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        android: FaAndroid,
        nintendo: SiNintendo,
        linux: FaLinux, 
        mac: FaApple,
        web: BsGlobe,
        ios: MdPhoneIphone,
    }
  return (
    <HStack marginY='10px'>
    {platforms.map((platform) => <Icon key={platform.id} as={icons[platform.slug]} color='gray.500'/>)}
    </HStack>
  )
}
