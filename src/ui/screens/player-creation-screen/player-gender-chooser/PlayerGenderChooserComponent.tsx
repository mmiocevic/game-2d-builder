import React from 'react';
import { getLocalizedMessage } from '../../../../configurations/localization/messages';
import { PlayerGender } from '../../../../domain/player/PlayerActionTypes';
import RadioGroup from 'antd/lib/radio/group';
import Radio from 'antd/lib/radio';

interface PlayerGenderChooserProps {
   playerGender: PlayerGender;
   setPlayerGender: (gender: PlayerGender) => void;
}

export const PlayerGenderChooserComponent = (props: PlayerGenderChooserProps) => (
   <div>
      <RadioGroup
         value={props.playerGender}
         onChange={(e) => props.setPlayerGender(e.target.value)}
      >
         <Radio value={PlayerGender.MALE}>{getLocalizedMessage('Male')}</Radio>
         <Radio value={PlayerGender.FEMALE}>{getLocalizedMessage('Female')}</Radio>
      </RadioGroup>
      <div>
         Boy {props.playerGender}
      </div>
      <div>
         Girl
      </div>
   </div>
);