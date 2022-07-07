function matrix(n){
   let matrix = [], k = 0;
   for (let i = 0;  i < n; i++){
      matrix.push([])
   }
   let array=0, index = 0;
   for (let j=1; j <= n **2; j++){
      matrix[array][index] = j
      if (index < n - 1 - k && array === k){
         index++
      }
      else if (index === n - 1 - k && array < n - 1 - k){
         array++
      }
      else if (array === n - 1 - k && index > k){
         index--
      }
      else if (index === k && array > k){
         array--

         if (matrix[array][index] !== undefined){
            k++
            array++
            index++
         }
      }
   }
   return matrix
}
console.log(matrix(4))