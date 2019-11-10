import React from 'react';
import { getLocalizedMessage } from '../../../../configurations/localization/messages';
import { PlayerGender } from '../../../../domain/player/PlayerActionTypes';
import male from '../../../../assets/images/gender/male.svg';
import female from '../../../../assets/images/gender/female.svg';
import './PlayerGenderChooser.less';
import { P } from '../../../__internal__/p/P';

const className: string = 'player-gender-chooser';

interface PlayerGenderChooserProps {
   playerGender: PlayerGender;
   setPlayerGender: (gender: PlayerGender) => void;
}

export const PlayerGenderChooserComponent = (props: PlayerGenderChooserProps) => (
   <div
      className={className}
   >
      <div className={`${className}__gender-block`}>
         <div
            className={formatGenderCheckerClassName(props.playerGender, PlayerGender.MALE)}
            onClick={() => props.setPlayerGender(PlayerGender.MALE)}
         />

         <P>{getLocalizedMessage('ShortHair')}</P>

         <div className={`${className}__gender-block__image`}>
            <img
               className={formatGenderImageClassName(props.playerGender, PlayerGender.MALE)}
               src={male}
               alt="Male"
            />
         </div>
      </div>

      <div className={`${className}__gender-block`}>
         <div
            className={formatGenderCheckerClassName(props.playerGender, PlayerGender.FEMALE)}
            onClick={() => props.setPlayerGender(PlayerGender.FEMALE)}
         />

         <P>{getLocalizedMessage('LongHair')}</P>

         <div className={`${className}__gender-block__image`}>
            <img
               className={formatGenderImageClassName(props.playerGender, PlayerGender.FEMALE)}
               src={female}
               alt="Female"/>
         </div>
      </div>
   </div>
);

const formatGenderCheckerClassName = (selectedPlayerGender: PlayerGender, gender: PlayerGender) =>
   selectedPlayerGender === gender ?
      `${className}__gender-block__checker ${className}__gender-block__checker--selected` :
      `${className}__gender-block__checker`;

const formatGenderImageClassName = (selectedPlayerGender: PlayerGender, gender: PlayerGender) =>
   selectedPlayerGender === gender ? '' : `${className}__gender-block__image--deselected`;