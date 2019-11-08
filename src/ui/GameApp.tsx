import React from 'react';
import { Area } from '../game-engine/graphics/environment/area/Area';
import { GrassTerrain } from '../game-engine/graphics/environment/terrains/grass/GrassTerrain';
import { WaterTerrain } from '../game-engine/graphics/environment/terrains/water/WaterTerrain';
import './GameApp.less';
import '../game-engine/graphics/GraphicsStyles';

export const GameApp = () => {
   return (
      <div className="game-app">
         <Area
            terrains={[
               [ <WaterTerrain/>, <GrassTerrain/>, <GrassTerrain/> ],
               [ <GrassTerrain/>, <WaterTerrain/>, <GrassTerrain/> ],
               [ <GrassTerrain/>, <GrassTerrain/>, <WaterTerrain/> ]
            ]}
            characters={[]}
         />
      </div>
   );
};