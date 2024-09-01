import React from 'react';
import { CharacterCard } from '@/components/characterCard/CharacterCard';
import { HeadMeta } from '@/components/headMeta/HeadMeta';
import { getLayout } from '@/components/layout/layout';
import { useCharacter } from '@/assets/hooks/useCharacter';

function Character() {
   const character = useCharacter();

   return (
      <>
         <HeadMeta title={'Character'} />
         {character && <CharacterCard key={character.id} character={character} />}
      </>
   );
}

Character.getLayout = getLayout;
export default Character;
