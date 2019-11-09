import React from 'react';
import { getLocalizedMessage } from '../../../configurations/localization/messages';
import Button from 'antd/lib/button/index';
import { LocaleChangerComponent } from '../../locale-changer/LocaleChangerComponent';
import './StartScreenComponent.less';

interface StartScreenProps {
   onStart: () => void;
}

export const StartScreenComponent = (props: StartScreenProps) => (
   <div className="start-screen">
      <div>
         <Button onClick={props.onStart}>{getLocalizedMessage('Start')}</Button>
      </div>
      <LocaleChangerComponent/>
   </div>
);