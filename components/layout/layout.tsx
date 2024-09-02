import { NextPage } from 'next';
import { PropsWithChildren } from 'react';
import styles from '@/styles/Home.module.css';
import { Header } from '../header/Header';
import styled from 'styled-components';

export const Layout: NextPage<PropsWithChildren> = (props) => {
   const { children } = props;
   return (
      <Container className={`${styles.main}`}>
         <Header />
         <Main>{children}</Main>
      </Container>
   );
};

export const getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 20px;
`;

const Main = styled.div`
   width: 100%;
   padding-bottom: 10px;
   overflow: hidden;
`;
