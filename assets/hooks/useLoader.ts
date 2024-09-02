import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import React from 'react';
export const useLoader = () => {
   const router = useRouter();

   React.useEffect(() => {
      const startLoading = () => {
         NProgress.start();
      };

      const stopLoading = () => {
         NProgress.done();
      };

      router.events.on('routeChangeStart', startLoading);
      router.events.on('routeChangeComplete', stopLoading);
      router.events.on('routeChangeError', stopLoading);

      return () => {
         router.events.off('routeChangeStart', startLoading);
         router.events.off('routeChangeComplete', stopLoading);
         router.events.off('routeChangeError', stopLoading);
      };
   }, [router]);
};
