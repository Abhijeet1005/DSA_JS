// arr = [1,2,3,4,5]
// newArr = []
// function revArr(value){
//     if(value.length === 1){
//         newArr.push(value[0])
//     }
//     else{
//         newArr.push(value.pop())
//         revArr(value)
//     }
// }

// revArr(arr)
// console.log(newArr)

arr = [1,2,3,4,5]
function revArr(start,end,value){
    if(start >= end){
        return value
    }
    else{
        let temp = value[start]
        value[start] = value[end]
        value[end] = temp
        return revArr(++start,--end,value)
    }
}

console.log(revArr(0,arr.length-1,arr))