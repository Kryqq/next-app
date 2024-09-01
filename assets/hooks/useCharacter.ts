import axios from 'axios';
import React from 'react';
import { Nullable } from '../types/types';
import { Character } from './useCharacters';
import { useRouter } from 'next/router';

export const useCharacter = (): Nullable<Character> => {
   const [character, setCharacter] = React.useState<Nullable<Character>>(null);

   const router = useRouter();

   React.useEffect(() => {
      axios.get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character/${router.query.id}`).then((res) => {
         setCharacter(res.data);
      });
   }, []);

   return character;
};
