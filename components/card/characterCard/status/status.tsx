import { CharacterStatusType } from '@/assets/api/rick-and-morty-api';
import Image, { StaticImageData } from 'next/image';
type Props = {
   status: CharacterStatusType;
   src: StaticImageData;
};

export const Status = (props: Props) => {
   const { src, status } = props;

   return (
      <>
         <Image src={src} alt={status} width={20} height={20} />
      </>
   );
};
