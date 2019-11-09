import 'jest';
import { getLocalizedMessage } from '../messages';

describe('getLocalizedMessage', () => {
   it('should return correct localized message if translation exists', () => {
      const message: string = 'Start';

      expect(getLocalizedMessage(message)).toEqual('Start');
      expect(getLocalizedMessage(message, 'hr')).toEqual('Početak');
   });

   it('should return warning message if translation not exists', () => {
      const message: string = 'I do not exist bla.';

      expect(getLocalizedMessage(message)).toEqual(`???${message}???`);
      expect(getLocalizedMessage(message, 'hr')).toEqual(`???${message}???`);
   });
});