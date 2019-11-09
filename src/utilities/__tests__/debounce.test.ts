import 'jest';
import { debounce } from '../debounce';

describe('debounce', () => {
   jest.useFakeTimers();

   it('should call passed function after delay', (done) => {
      let myFnCalledTimes = 0;
      const myFn = () => {
         myFnCalledTimes++;
      };

      debounce(myFn, 2000)();
      jest.advanceTimersByTime(2000);

      debounce(myFn, 500)();
      jest.advanceTimersByTime(500);

      debounce(myFn, 1000)();
      jest.advanceTimersByTime(1000);

      if (myFnCalledTimes === 3) {
         done();
      }
   });
});