import { useEffect, useState } from 'react';

export const useKey = (key: string) => {
   const [ pressed, setPressed ] = useState(false);
   const match = (event: any) => key.toLowerCase() === event.key.toLowerCase();
   const onDown = (event: any) => {
      if (match(event)) setPressed(true);
   };
   const onUp = (event: any) => {
      if (match(event)) setPressed(false);
   };

   useEffect(() => {
      window.addEventListener('keydown', onDown);
      window.addEventListener('keyup', onUp);

      return () => {
         window.removeEventListener('keydown', onDown);
         window.removeEventListener('keyup', onUp);
      };
   }, [ key ]);

   return pressed;
};