import { getLayout } from '@/components/layout/baseLayout/BaseLayout';
import { PageWrapper } from '@/components/pageWrapper/PageWrapper';
import { LoginNavigate } from '@/hoc/LoginNavigate';

const Private = () => {
   return (
      <LoginNavigate>
         <PageWrapper> PRIVATE PAGE </PageWrapper>
      </LoginNavigate>
   );
};

Private.getLayout = getLayout;
export default Private;
