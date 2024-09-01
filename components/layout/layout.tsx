import { NextPage } from 'next';
import { PropsWithChildren } from 'react';
import styles from '@/styles/Home.module.css';
import { Navbar } from '../navbar/Navbar';

export const Layout: NextPage<PropsWithChildren> = (props) => {
   const { children } = props;
   return (
      <main className={`${styles.main}`}>
         <Navbar />
         {children}
      </main>
   );
};

export const getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;
