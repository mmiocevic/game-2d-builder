import { getDefaultLocale } from './locales';

export const messages = {
   'Female': {
      en: 'Female',
      hr: 'Žensko'
   },
   'Hello': {
      en: 'Hello',
      hr: 'Pozdrav'
   },
   'Male': {
      en: 'Male',
      hr: 'Muško'
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
   }
};

export const getLocalizedMessage = (message: string, locale = getDefaultLocale().shortName): string =>
   (messages[message as keyof object] && messages[message as keyof object][locale]) || `???${message}???`;