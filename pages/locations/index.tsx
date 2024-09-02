import React from 'react';
import { getLayout } from '@/components/layout/layout';
import { PageWrapper } from '@/components/pageWrapper/PageWrapper';
import { Header } from '@/components/header/Header';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { LocationType } from '@/assets/api/rick-and-morty-api';
import { ResponseType } from '@/assets/api/rick-and-morty-api';
import { Card } from '@/components/card/Card';

const getLocations = () => {
   return fetch('https://rickandmortyapi.com/api/location', {
      method: 'GET',
   }).then((res) => res.json());
};

export const getStaticProps = async () => {
   const queryClient = new QueryClient();

   await queryClient.fetchQuery({
      queryKey: ['locations'],
      queryFn: getLocations,
   });

   return {
      props: {
         dehydratedState: dehydrate(queryClient),
      },
   };
};

const Locations = () => {
   const { data: locations } = useQuery<ResponseType<LocationType>>({
      queryKey: ['locations'],
      queryFn: getLocations,
   });

   if (!locations) {
      return null;
   }

   const locationsList = locations.results.map((location) => {
      return <Card key={location.id} name={location.name} />;
   });

   return <PageWrapper>{locationsList}</PageWrapper>;
};

Locations.getLayout = getLayout;
export default Locations;
