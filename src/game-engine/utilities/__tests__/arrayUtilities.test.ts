import 'jest';
import { is2dArrayEqualSize } from '../arrayUtilities';

describe('is2dArrayEqualSize', () => {
   it('should return true for equal size arrays', () => {
      expect(is2dArrayEqualSize([
         [ 1, 5 ],
         [ 6, 3 ]
      ]))
         .toEqual(true);

      expect(is2dArrayEqualSize([
         [ '1', '5', '9' ],
         [ '2', '4', '7' ],
         [ '6', '8', '3' ]
      ]))
         .toEqual(true);
   });

   it('should return false for different size arrays', () => {
      expect(is2dArrayEqualSize([
         [ 1, 5 ],
         [ 6, 3, 2 ]
      ]))
         .toEqual(false);

      expect(is2dArrayEqualSize([
         [ 1, 5, 9 ],
         [ 2, 4, 7 ],
         [ 6, 8, 3 ],
         [ 11, 22, 33 ]
      ]))
         .toEqual(false);
   });
});