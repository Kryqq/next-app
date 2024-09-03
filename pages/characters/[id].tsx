import React from 'react';
import CharacterCard from '@/components/card/characterCard/CharacterCard';
import { HeadMeta } from '@/components/headMeta/HeadMeta';
import { BaseLayout } from '@/components/layout/baseLayout/BaseLayout';
import { API } from '@/assets/api/api';
import { CharacterType } from '@/assets/api/rick-and-morty-api';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { PageWrapper } from '@/components/pageWrapper/PageWrapper';

export const getStaticPaths: GetStaticPaths = async () => {
   const { results } = await API.rickAndMorty.getCharacters();

   const paths = results.map((character) => ({
      params: { id: character.id.toString() },
   }));

   return {
      paths,
      fallback: true,
   };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
   const { id } = params || {};

   const character = await API.rickAndMorty.getCharacter(id as string);

   if (!character) {
      return {
         notFound: true,
      };
   }

   return {
      props: {
         character,
      },
   };
};

type Props = {
   character: CharacterType;
};

const Character = (props: Props) => {
   const { character } = props;

   const router = useRouter();

   if (router.isFallback) {
      return <div>Loading...</div>;
   }

   const characterId = router.query.id;

   const goToCharacters = () => {
      router.push('/characters');
   };

   return (
      <>
         <HeadMeta title={'Character'} />
         {character && (
            <PageWrapper title="Character">
               <h1>{characterId}</h1>
               <CharacterCard key={character.id} character={character} />
               <button onClick={goToCharacters}>GO TO CHARACTERS</button>
            </PageWrapper>
         )}
      </>
   );
};

Character.getLayout = (page: React.ReactElement) => <BaseLayout>{page}</BaseLayout>;
export default Character;
