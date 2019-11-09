import React, { CSSProperties } from 'react';
import Transition from 'react-transition-group/Transition';

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
   showWhen: boolean;
   duration?: number;
}

export const Anim = (props: AnimProps) => (
   <Transition
      unmountOnExit={true}
      in={props.showWhen}
      timeout={props.duration || defaultDuration}
   >
      {(state: keyof object) => (
         <div
            style={{
               ...getDefaultStyle(props.duration || defaultDuration),
               ...transitionStyles[state] as CSSProperties
            }}
         >
            {props.children}
         </div>
      )}
   </Transition>
);