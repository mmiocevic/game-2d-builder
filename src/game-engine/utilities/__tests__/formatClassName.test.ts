import 'jest';
import { formatClassName } from '../formatClassName';
import { GLOBAL_PREFIX } from '../globalVariables';

describe('formatClassName', () => {
   it('should correctly formatted class name with appended prefix', () => {
      expect(formatClassName('test'))
         .toEqual(`${GLOBAL_PREFIX}-test`);
   });
});