import React from 'react';
import { getLayout } from '@/components/layout/layout';
import { API } from '@/assets/api/api';
import { CharacterType, ResponseType } from '@/assets/api/rick-and-morty-api';
import { PageWrapper } from '@/components/pageWrapper/PageWrapper';
import { Header } from '@/components/header/Header';

import { useCharacters } from '@/assets/hooks/useCharacters';
import { CharacterCard } from '@/components/characterCard/CharacterCard';
import { HeadMeta } from '@/components/headMeta/HeadMeta';

export const getStaticProps = async () => {
   const characters = await API.rickAndMorty.getCharacters();
   return {
      props: {
         characters,
      },
   };
};
type Props = {
   characters: ResponseType<CharacterType>;
};

const Characters = (props: Props) => {
   const { characters } = props;
   const charactersList = characters.results.map((character) => {
      return <div key={character.id}>{character.name}</div>;
   });

   return (
      <PageWrapper>
         <Header />
         {charactersList}
      </PageWrapper>
   );
};

Characters.getLayout = getLayout;
export default Characters;
