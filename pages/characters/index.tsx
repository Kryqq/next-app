import React from 'react';
import { API } from '@/assets/api/api';
import { CharacterType, ResponseType } from '@/assets/api/rick-and-morty-api';
import { PageWrapper } from '@/components/pageWrapper/PageWrapper';
import { BaseLayout } from '@/components/layout/baseLayout/BaseLayout';
import dynamic from 'next/dynamic';

const CharacterCard = dynamic(() => import('components/card/characterCard/CharacterCard'), {
   ssr: false,
   loading: () => <p>Loading...</p>,
});

export const getStaticProps = async () => {
   const characters = await API.rickAndMorty.getCharacters();
   return {
      props: {
         characters,
      },

      revalidate: 60,
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

   return <PageWrapper title="Characters">{charactersList}</PageWrapper>;
};

Characters.getLayout = function (page: React.ReactElement) {
   return <BaseLayout>{page}</BaseLayout>;
};
export default Characters;
