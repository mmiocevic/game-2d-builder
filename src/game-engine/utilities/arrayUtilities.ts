export const is2dArrayEqualSize = (arr: any[][]) => {
   const totalRows: number = arr.length;

   for (let rowIndex = 0; rowIndex < totalRows; rowIndex++) {
      if (arr[rowIndex].length !== totalRows) {
         return false;
      }
   }

   return true;
};