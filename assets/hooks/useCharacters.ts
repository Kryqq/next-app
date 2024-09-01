import axios from 'axios';
import React from 'react';
import { Nullable } from '../types/types';

export const useCharacters = (): Nullable<Character[]> => {
   const [characters, setCharacters] = React.useState<Nullable<Character[]>>(null);

   React.useEffect(() => {
      axios.get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character`).then((res) => {
         setCharacters(res.data.results);
      });
   }, []);

   return characters;
};
export type Character = {
   id: number;
   name: string;
   image: string;
};
