import React from 'react';
import { getDefaultLocale, setDefaultLocale, SUPPORTED_LOCALES } from '../../configurations/localization/locales';
import RadioGroup from 'antd/lib/radio/group';
import RadioButton from 'antd/lib/radio/radioButton';

export const LocaleChangerComponent = () => (
   <RadioGroup
      size="default"
      buttonStyle="solid"
      defaultValue={getDefaultLocale().shortName}
      onChange={e => setDefaultLocale(e.target.value)}
   >
      {SUPPORTED_LOCALES.map(locale => (
         <RadioButton
            key={locale.shortName}
            value={locale.shortName}
         >
            {locale.name}
         </RadioButton>
      ))}
   </RadioGroup>
);