import React from 'react';
import Button from 'antd/lib/button/index';
import { LocaleChangerComponent } from '../../locale-changer/LocaleChangerComponent';
import { CreditsComponent } from '../../credits/CreditsComponent';
import './StartScreen.less';

const className: string = 'start-screen';

interface StartScreenProps {
   onStart: () => void;
}

export const StartScreenComponent = (props: StartScreenProps) => (
   <div className={`${className}`}>
      <h1 className={`${className}__title`}>League of Languages</h1>

      <div className={`${className}__start-button`}>
         <Button onClick={props.onStart}>Start</Button>
      </div>

      <div className={`${className}__locale-changer`}>
         <LocaleChangerComponent/>
      </div>

      <div className={`${className}__credits`}>
         <CreditsComponent/>
      </div>
   </div>
);