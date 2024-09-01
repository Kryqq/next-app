import { Inter } from 'next/font/google';
import React from 'react';
import { useCharacters } from '@/assets/hooks/useCharacters';
import { CharacterCard } from '@/components/characterCard/CharacterCard';
import { HeadMeta } from '@/components/headMeta/HeadMeta';
import { getLayout } from '@/components/layout/layout';
import Link from 'next/link';

function Characters() {
   const characters = useCharacters();

   return (
      <>
         <HeadMeta title={'Characters'} />
         {characters &&
            characters.map((character) => {
               return (
                  <Link key={character.id} href={`/characters/${character.id}`}>
                     <CharacterCard character={character} />
                  </Link>
               );
            })}
      </>
   );
}

Characters.getLayout = getLayout;
export default Characters;
