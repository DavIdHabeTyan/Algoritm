function matrix (numb) {
   let arr = [];
   let leftDiagonal = [];
   let rigthDiagonal = [];
   let count = 1

   for(let i = 0; i < numb; i++) {
      let leftDiagonal = [];
      for(let j = 0; j < numb; j++) {
         leftDiagonal.push(count)
         count++
      }
      arr.push(leftDiagonal);
   }
   for(let i = 0; i < numb; i++) {
      for(let j = i; j === i; j++) {
         leftDiagonal.push(arr[i][j])
      }
   }
   for(let i = 0; i < numb; i++) {
      for(let j = arr.length - 1 - i; j === arr.length - 1 - i; j--){
         rigthDiagonal.push(arr[i][j])
      }
   }
   return leftDiagonal
}

console.log(matrix(3))