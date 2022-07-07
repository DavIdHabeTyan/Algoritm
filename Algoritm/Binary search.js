let arrList = [12, 43, 5, 6, 87, 3, 2, 99];

function binarySearch(arr, number){
   let sortArr = arr.sort((a, b) => a - b);
   let left = 0
   let right = sortArr.length-1;
   let mid;
   while(left <= right){
      mid = Math.round((right -left) / 2 ) + left;
      if (number === sortArr[mid]){
         return `find index ${mid}`;
      } else if(number < sortArr[mid]){
         right = mid - 1;
      }else {
         left = mid + 1
      }
   }

   return false;
}

console.log(binarySearch(arrList, 5))