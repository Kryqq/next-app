// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Person = {
   id: number;
   name: string;
   sex: string;
};

const persons: Person[] = [
   { id: 1, name: 'John Doe', sex: 'male' },
   { id: 2, name: 'Jane Doe', sex: 'female' },
   { id: 3, name: 'July Doe', sex: 'female' },
   { id: 4, name: 'Jim Doe', sex: 'male' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Person[]>) {
   if (req.method === 'GET') {
      let users = persons;
      const term = req.query.term as string;
      if (term) {
         users = users.filter((user) => {
            if (user.sex.toLowerCase() === term.toLowerCase()) return user;
         });
      }

      res.status(200).json(users);
   }
}
