import React from 'react';
import { getLayout } from '@/components/layout/layout';
import { API } from '@/assets/api/api';
import { EpisodeType, ResponseType } from '@/assets/api/rick-and-morty-api';
import { PageWrapper } from '@/components/pageWrapper/PageWrapper';
import { Header } from '@/components/header/Header';
import { Card } from '@/components/card/Card';

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

Episodes.getLayout = getLayout;
export default Episodes;
