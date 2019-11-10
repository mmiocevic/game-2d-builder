import React from 'react';
import { GlobalClassNames } from '../../../globals/Globals';

type PProps = {
   large?: boolean;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export const P = (props: PProps) => (
   <p
      className={`${props.large ? GlobalClassNames.TEXT_LARGE : GlobalClassNames.TEXT_NORMAL} ${props.className}`}
   >
      {props.children}
   </p>
);