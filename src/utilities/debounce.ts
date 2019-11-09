export const debounce = (fn: any, delay: number) => {
   let timerId: any;

   return function(...args: any[]) {
      if (timerId) {
         clearTimeout(timerId);
      }

      timerId = setTimeout(() => {
         fn(...args);
         timerId = null;
      }, delay);
   };
};