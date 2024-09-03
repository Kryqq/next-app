import React from 'react';
import { API } from '@/assets/api/api';
import { CharacterType, ResponseType } from '@/assets/api/rick-and-morty-api';
import { PageWrapper } from '@/components/pageWrapper/PageWrapper';
import  CharacterCard  from '@/components/card/characterCard/CharacterCard';
import { BaseLayout } from '@/components/layout/baseLayout/BaseLayout';

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

   return <PageWrapper title="Characters" >{charactersList}</PageWrapper>;
};

Characters.getLayout = function (page: React.ReactElement) {
   return <BaseLayout>{page}</BaseLayout>;
};
export default Characters;
