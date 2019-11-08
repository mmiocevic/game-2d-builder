import React, { ReactElement } from 'react';
import { formatClassName } from '../../../utilities/formatClassName';
import { is2dArrayEqualSize } from '../../../utilities/arrayUtilities';
import { CharacterProps } from '../../../gameplay/characters/Characters';
import './Area.less';

interface AreaProps {
   terrains: ReactElement[][];
   characters: CharacterProps[];
}

export const Area: React.FunctionComponent<AreaProps> = (props: AreaProps) => {
   if (is2dArrayEqualSize(props.terrains) === false) {
      throw new Error('Terrains array should be equal size!');
   }

   return (
      <div className={formatClassName('area')}>
         {props.terrains.map((row, i) => <span key={i}>{createAreaRow(row)}</span>)}
      </div>
   );
};

const createAreaRow = (terrainsRow: ReactElement[]) => (
   <div className={formatClassName('area__row')}>
      {terrainsRow.map((terrain, i) => <span key={i}>{terrain}</span>)}
   </div>
);