import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { useLoader } from '@/assets/hooks/useLoader';
import '../styles/nprogress.css';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
   getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
   Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
   const getLayout = Component.getLayout ?? ((page) => page);
   const [queryClient] = React.useState(() => new QueryClient());

   useLoader();

   return getLayout(
      <QueryClientProvider client={queryClient}>
         <HydrationBoundary state={pageProps.dehydratedState}>
            <Component {...pageProps} />
         </HydrationBoundary>
      </QueryClientProvider>
   );
}
