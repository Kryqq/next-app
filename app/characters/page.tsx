import React from 'react';
 
import { CharacterType, ResponseType } from '@/assets/api/rick-and-morty-api';
import { PageWrapper } from '@/components/pageWrapper/PageWrapper';
 
import dynamic from 'next/dynamic';

const CharacterCard = dynamic(() => import('components/card/characterCard/CharacterCard'), {
   ssr: false,
   loading: () => <p>Loading...</p>,
});

// export const getStaticProps = async () => {
//    const characters = await API.rickAndMorty.getCharacters();
//    return {
//       props: {
//          characters,
//       },

//       revalidate: 60,
//    };
// };
// type Props = {
//    characters: ResponseType<CharacterType>;
// };

const getCharacters = async (): Promise<ResponseType<CharacterType>> => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character`, {
      cache: 'force-cache',
      next: { revalidate: 60 },
   });

   return res.json();
};

export default async function Characters() {
   const { results } = await getCharacters();
   const charactersList = results.map((character) => {
      return <CharacterCard key={character.id} character={character} />;
   });

   return <PageWrapper title="Characters">{charactersList}</PageWrapper>;
}
