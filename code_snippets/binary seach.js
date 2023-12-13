// This linear seach boi
// let arr = [2,4,3,7,6,8,9,3,0,1]
// elem = 8
// let pos = undefined

// for(i=0;i<arr.length;i++){
//     if(arr[i] === elem){
//         pos = i
//         break;
//     }
// }
// console.log(pos)

// This is binary with while loop
// let BaseArr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// let find = 19;

// function binSearch(arr, elem) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);

//     if (arr[mid] === elem) {
//       return mid;
//     } else if (arr[mid] > elem) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }

//   return -1;
// }
// console.log(binSearch(BaseArr, find));

baseArr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

function binRec(start,end,arr,elem){
    if(start <= end){
        mid = Math.floor((start+end)/2)
        if(arr[mid]===elem) return mid
        else if(arr[mid] < elem) return binRec(mid+1,end,arr,elem)
        else if(arr[mid] > elem) return binRec(start,mid-1,arr,elem)
    }
    return -1;
}

console.log(binRec(0,baseArr.length-1,baseArr,15))










































