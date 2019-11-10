import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { P } from '../__internal__/p/P';
import Popover from 'antd/lib/popover';
import Tooltip from 'antd/lib/tooltip';
import Button from 'antd/lib/button';
import './Credits.less';

const className: string = 'credits';

export const CreditsComponent = () => (
   <Popover
      placement="bottom"
      trigger="click"
      content={(
         <div className={className}>
            <P>Created by Mislav Miočević</P>

            <div className={`${className}__me`}/>

            <P>
               <CopyToClipboard text="mislavmiocevic@gmail.com">
                  <Tooltip
                     placement="right"
                     trigger="click"
                     title="Copied email!"
                  >
                     <a href="mailto: mislavmiocevic@gmail.com">
                        mislavmiocevic@gmail.com
                     </a>
                  </Tooltip>
               </CopyToClipboard>
            </P>

            <P>
               <a
                  href="https://hr.linkedin.com/in/mislavmiocevic"
                  rel="noopener noreferrer"
                  target="_blank"
               >
                  https://hr.linkedin.com/in/mislavmiocevic
               </a>
            </P>
         </div>
      )}
   >
      <Button type="link">Credits</Button>
   </Popover>
);