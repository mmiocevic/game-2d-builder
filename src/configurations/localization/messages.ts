import { getDefaultLocale } from './locales';

export const messages = {
   'LetsGo!': {
      en: 'Let\'s Go!',
      hr: 'Idemo!'
   },
   'LongHair': {
      en: 'Long Hair',
      hr: 'Duga kosa'
   },
   'Hello': {
      en: 'Hello',
      hr: 'Pozdrav'
   },
   'ShortHair': {
      en: 'Short Hair',
      hr: 'Kratka kosa'
   },
   'Start': {
      en: 'Start',
      hr: 'Početak'
   },
   'Welcome!': {
      en: 'Welcome!',
      hr: 'Dobrodošli!'
   },
   'WhatIsYourName?': {
      en: 'What is your name?',
      hr: 'Kako se zoveš?'
   },
   'WhatKindOfHairWouldYouLike?': {
      en: 'What kind of hair would you like?',
      hr: 'Kakvu kosu želiš?'
   }
};

export const getLocalizedMessage = (message: string, locale = getDefaultLocale().shortName): string =>
   (messages[message as keyof object] && messages[message as keyof object][locale]) || `???${message}???`;