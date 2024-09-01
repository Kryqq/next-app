import { Character } from '@/assets/hooks/useCharacters';
import Image from 'next/image';
import styles from './CharacterCard.module.scss';

type Props = {
   character: Character;
};

export const CharacterCard = (props: Props) => {
   const { character } = props;

   return (
      <div className={styles.card}>
         <div>{character.name}</div>
         <Image src={character.image} alt={character.name} width={300} height={300} />
      </div>
   );
};
