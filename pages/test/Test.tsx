import React from 'react';
import { PageWrapper } from '@/components/pageWrapper/PageWrapper';
import { BaseLayout } from '@/components/layout/baseLayout/BaseLayout';
import path from 'path';
import fs from 'fs/promises';

export const getStaticProps = async () => {
   const getData = async (): Promise<{ title: string }> => {
      const filePath = path.join(process.cwd(), 'public', 'staticData.json');

      try {
         const jsonData = await fs.readFile(filePath);

         return JSON.parse(jsonData.toString());
      } catch (error) {
         return { title: 'no data' };
      }
   };

   const { title } = await getData();

   return {
      props: {
         title,
      },
   };
};
type Props = {
   title: string;
};

const Test = (props: Props) => {
   const { title } = props;

   return <PageWrapper>{title}</PageWrapper>;
};

Test.getLayout = function (page: React.ReactElement) {
   return <BaseLayout>{page}</BaseLayout>;
};
export default Test;
