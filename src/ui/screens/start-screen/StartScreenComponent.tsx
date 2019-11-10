import React from 'react';
import { Anim } from '../../__internal__/anim/Anim';
import { P } from '../../__internal__/p/P';
import { LocaleChangerComponent } from '../../locale-changer/LocaleChangerComponent';
import { CreditsComponent } from '../../credits/CreditsComponent';
import Button from 'antd/lib/button/index';
import './StartScreen.less';

const className: string = 'start-screen';

interface StartScreenProps {
   onStart: () => void;
}

export const StartScreenComponent = (props: StartScreenProps) => (
   <Anim>
      <div className={`${className}`}>
         <P large={true} className={`${className}__title`}>League of Languages</P>

         <div className={`${className}__start-button`}>
            <Button onClick={props.onStart}>Start</Button>
         </div>

         <LocaleChangerComponent/>

         <div className={`${className}__credits`}>
            <CreditsComponent/>
         </div>
      </div>
   </Anim>
);