import React from 'react';
import './LocaleChangerComponent.less';
import RadioGroup from 'antd/lib/radio/group';
import RadioButton from 'antd/lib/radio/radioButton';
import { getDefaultLocale, setDefaultLocale, SUPPORTED_LOCALES } from '../../configurations/localization/locales';

interface LocaleChangerProps {
}

export const LocaleChangerComponent = (props: LocaleChangerProps) => (
   <div className="locale-changer">
      <RadioGroup
         size="large"
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
   </div>
);