import { Badge } from "@chakra-ui/react";


interface Props {
  score: number;
}

export const CriticScore = ({score}: Props) => {
  let color = score > 85 ? 'green' : score > 60 ? ' yellow ' : '';

  return (
    <Badge fontSize='15px' paddingX='2.5px' borderRadius='4.2px' color={color}>{score}</Badge>
  )
}
