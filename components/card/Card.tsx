'use client'
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type PropsType = {
   name: string;
};

export const Card = (props: PropsWithChildren<PropsType>) => {
   const { children, name } = props;

   return (
      <CardBlock>
         <Name>{name}</Name>
         {children}
      </CardBlock>
   );
};

const CardBlock = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   row-gap: 6px;
   border-radius: 10px;
   background-color: rgb(177, 177, 177);
   padding-top: 6px;
   margin-top: 20px;
   gap: 5px;
   overflow: hidden;
`;

const Name = styled.div`
   font-weight: 600;
   font-size: 24px;
`;
