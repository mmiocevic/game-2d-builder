import { ReactElement } from 'react';

interface AttackProps {
   name: string;
   damage: number;
   numberOfHits: number;
}

export interface CharacterProps {
   character: ReactElement;
   hitpoints: number;
   attacks: AttackProps[];
   positionX: number;
   positionY: number;
}