import React from 'react';

import { API } from '@/assets/api/api';
import { EpisodeType, ResponseType } from '@/assets/api/rick-and-morty-api';
import { PageWrapper } from '@/components/pageWrapper/PageWrapper';

import { Card } from '@/components/card/Card';
import { BaseLayout, getLayout } from '@/components/layout/baseLayout/BaseLayout';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
   res.setHeader('Cache-Control', 'public, s-maxage=10 , stale-while-revalidate = 100');

   const episodes = await API.rickAndMorty.getEpisodes();

   const isAuth = true;
   if (!episodes) {
      return {
         notFound: true,
      };
   }

   if (!isAuth) {
      return {
         redirect: {
            destination: '/characters',
            permanent: false,
         },
      };
   }

   return {
      props: {
         episodes,
      },
   };
};
type Props = {
   episodes: ResponseType<EpisodeType>;
};

const Episodes = (props: Props) => {
   const { episodes } = props;
   const episodesList = episodes.results.map((episode) => {
      return <Card key={episode.id} name={episode.name} />;
   });

   return <PageWrapper>{episodesList}</PageWrapper>;
};

Episodes.getLayout = (page: React.ReactElement) => {
   return <BaseLayout>{page}</BaseLayout>;
};
export default Episodes;

