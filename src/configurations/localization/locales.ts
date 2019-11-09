interface Locale {
   name: string;
   shortName: string;
}

let DEFAULT_LOCALE: Locale = { name: 'English', shortName: 'en' };

export const SUPPORTED_LOCALES: Locale[] = [
   { ...DEFAULT_LOCALE },
   { name: 'Hrvatski', shortName: 'hr' }
];

export const getDefaultLocale = (): Locale => ({ ...DEFAULT_LOCALE });

export const setDefaultLocale = (localeShortName: string): void => {
   for (let i = 0; i < SUPPORTED_LOCALES.length; i++) {
      if (SUPPORTED_LOCALES[i].shortName === localeShortName) {
         DEFAULT_LOCALE = { ...SUPPORTED_LOCALES[i] };

         return;
      }
   }

   throw new Error(`${localeShortName} is not supported!}`);
};