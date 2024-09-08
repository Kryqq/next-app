'use client';

import React from 'react';
import { PageWrapper } from '@/components/pageWrapper/PageWrapper';
import { LocationType } from '@/assets/api/rick-and-morty-api';
import { Card } from '@/components/card/Card';
import { Nullable } from '@/types/nullable';
import { API } from '@/assets/api/api';

const Locations = () => {
   const [locations, setLocations] = React.useState<Nullable<LocationType[]>>(null);

   React.useEffect(() => {
      API.rickAndMorty.getLocations().then((res) => setLocations(res.results));
   }, []);

   if (!locations) {
      return null;
   }

   const locationsList = locations.map((location) => {
      return <Card key={location.id} name={location.name} />;
   });

   return <PageWrapper>{locationsList}</PageWrapper>;
};

export default Locations;
