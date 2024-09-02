import React from 'react';
import { getLayout } from '@/components/layout/layout';
import { API } from '@/assets/api/api';
import { CharacterType, ResponseType } from '@/assets/api/rick-and-morty-api';
import { PageWrapper } from '@/components/pageWrapper/PageWrapper';
import { Header } from '@/components/header/Header';
import { CharacterCard } from '@/components/card/characterCard/CharacterCard';
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
      return <CharacterCard key={character.id} character={character} />;
   });

   return <PageWrapper>{charactersList}</PageWrapper>;
};

Characters.getLayout = getLayout;
export default Characters;
