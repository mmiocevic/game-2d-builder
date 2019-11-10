import React, { CSSProperties } from 'react';
import Transition from 'react-transition-group/Transition';

export const DEFAULT_DELAY: number = 2000;
const defaultDuration: number = 1000;
const getDefaultStyle = (duration: number) => ({
   transition: `opacity ${duration}ms ease-in-out`,
   opacity: 0
});
const transitionStyles = {
   entering: { opacity: 0 },
   entered: { opacity: 1 },
   exiting: { opacity: 0 },
   exited: { opacity: 0 }
};

interface AnimProps {
   children: JSX.Element;
   showWhen?: boolean;
   showAfter?: number;
}

export const Anim = (props: AnimProps) => {
   let [ show, setShow ] = React.useState(false);
   const { children, showAfter, showWhen } = props;

   React.useEffect(() => {
      if (show) {
         return;
      }

      if (showWhen !== false) {
         if (showAfter) {
            setTimeout(() => setShow(true), showAfter);
         }
         else {
            setShow(true);
         }
      }
   }, [ show, showAfter, showWhen ]);

   return (
      <Transition
         unmountOnExit={true}
         in={show}
         timeout={defaultDuration}
      >
         {(state: keyof object) => (
            <div
               style={{
                  ...getDefaultStyle(defaultDuration),
                  ...transitionStyles[state] as CSSProperties,
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'column'
               }}
            >
               {children}
            </div>
         )}
      </Transition>
   );
};