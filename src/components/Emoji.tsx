import bad from "../assets/bad.webp";
import target from "../assets/target.png";
import good from "../assets/good.png";
import { ImageProps, Image } from "@chakra-ui/react";

interface Props {
  rating: number;
}

export const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: bad, alt: "Meh" , boxSize: '25px' },
    5: { src: good, alt: "Recommended", boxSize: '25px' },
    4: { src: target, alt: "Exepetional", boxSize: '30px' },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};
