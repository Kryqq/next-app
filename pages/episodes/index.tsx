import React from 'react';

import { API } from '@/assets/api/api';
import { EpisodeType, ResponseType } from '@/assets/api/rick-and-morty-api';
import { PageWrapper } from '@/components/pageWrapper/PageWrapper';
import { Header } from '@/components/header/Header';
import { Card } from '@/components/card/Card';
import { BaseLayout, getLayout } from '@/components/layout/baseLayout/BaseLayout';

export const getServerSideProps = async () => {
   const episodes = await API.rickAndMorty.getEpisodes();

   if (!episodes) {
      return {
         notFound: true,
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
