import Image from 'next/image';

import { CharacterType } from '@/assets/api/rick-and-morty-api';

import aliveStatus from '@/public/statuses/alive.png';
import deadStatus from '@/public/statuses/dead.png';
import unknownStatus from '@/public/statuses/unknown.png';

import Link from 'next/link';

import { Card } from '../Card';
import styled from 'styled-components';

type Props = {
   character: CharacterType;
};

const statusImages = {
   Alive: aliveStatus,
   Dead: deadStatus,
   unknown: unknownStatus,
};

const CharacterCard = (props: Props) => {
   const { id, image, name, status } = props.character;

   return (
      <Card name={name}>
         <Link href={`/characters/${id}`}>
            <ImageBlock src={image} alt={name} width={300} height={300} priority />
            <Image src={statusImages[status]} alt={status}></Image>
         </Link>
      </Card>
   );
};
const ImageBlock = styled(Image)`
   object-fit: cover;
`;

export default CharacterCard;
