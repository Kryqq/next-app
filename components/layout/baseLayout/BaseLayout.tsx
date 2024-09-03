import { NextPage } from 'next';
import { PropsWithChildren } from 'react';
import { Layout } from '../Layout';

export const BaseLayout: NextPage<PropsWithChildren> = (props) => {

   const { children } = props;

   return <Layout>{children}</Layout>;
};

export const getLayout = (page: React.ReactElement) => <BaseLayout>{page}</BaseLayout>;
