import 'jest';
import { getDefaultLocale, setDefaultLocale, SUPPORTED_LOCALES } from '../locales';

test('Supported locales', () => {
   expect(SUPPORTED_LOCALES)
      .toEqual([
         { name: 'English', shortName: 'en' },
         { name: 'Hrvatski', shortName: 'hr' }
      ]);
});

describe('getDefaultLocale', () => {
   it('should return default locale', () => {
      expect(getDefaultLocale())
         .toEqual({ name: 'English', shortName: 'en' });
   });
});

describe('setDefaultLocale', () => {
   it('should set new default locale if locale is supported', () => {
      expect(getDefaultLocale()).toEqual({ name: 'English', shortName: 'en' });

      setDefaultLocale('hr');

      expect(getDefaultLocale()).toEqual({ name: 'Hrvatski', shortName: 'hr' });
   });

   it('should throw error if locale is not supported', () => {
      expect(() => {
         setDefaultLocale('hello');
      }).toThrowError('hello is not supported!');
   });
});