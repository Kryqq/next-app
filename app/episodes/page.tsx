 
import React from 'react';

 
import { EpisodeType, ResponseType } from '@/assets/api/rick-and-morty-api';
import { PageWrapper } from '@/components/pageWrapper/PageWrapper';

import { Card } from '@/components/card/Card';
 
import { notFound } from 'next/navigation';

// export const getServerSideProps: GetServerSideProps = async ({ res }) => {
//    res.setHeader('Cache-Control', 'public, s-maxage=10 , stale-while-revalidate = 100');

//    const episodes = await API.rickAndMorty.getEpisodes();

//    const isAuth = true;
//    if (!episodes) {
//       return {
//          notFound: true,
//       };
//    }

//    if (!isAuth) {
//       return {
//          redirect: {
//             destination: '/characters',
//             permanent: false,
//          },
//       };
//    }

//    return {
//       props: {
//          episodes,
//       },
//    };
// };

const getEpisodes = async (): Promise<ResponseType<EpisodeType>> => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/episode`);

   return res.json();
};

export default async function Episodes() {
   const {results} = await getEpisodes();
   if (!results) {
	notFound()
   }
   const episodesList = results.map((episode) => {
      return <Card key={episode.id} name={episode.name} />;
   });

   return <PageWrapper>{episodesList}</PageWrapper>;
}
