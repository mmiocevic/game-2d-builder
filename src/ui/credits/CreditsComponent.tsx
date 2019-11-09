import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Popover from 'antd/lib/popover';
import Button from 'antd/lib/button';
import Tooltip from 'antd/lib/tooltip';
import './Credits.less';

const className: string = 'credits';

export const CreditsComponent = () => (
   <div className={className}>
      <Popover
         placement="bottom"
         trigger="click"
         content={(
            <div className={`${className}__content`}>
               <p>Created by Mislav Miočević</p>
               <div className={`${className}__content__me`}/>
               <p>
                  <CopyToClipboard text="mislavmiocevic@gmail.com">
                     <Tooltip
                        overlayClassName={`${className}__content__me__email`}
                        title="Copied email!"
                        trigger="click"
                        placement="right"
                     >
                        <a href="mailto: mislavmiocevic@gmail.com">
                           mislavmiocevic@gmail.com
                        </a>
                     </Tooltip>
                  </CopyToClipboard>
               </p>
               <p>
                  <a
                     href="https://hr.linkedin.com/in/mislavmiocevic"
                     rel="noopener noreferrer"
                     target="_blank">https://hr.linkedin.com/in/mislavmiocevic
                  </a>
               </p>
            </div>
         )}
      >
         <Button type="link">Credits</Button>
      </Popover>
   </div>
);