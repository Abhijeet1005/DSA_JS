arr = [5,6,3,8,7,3,6,9,0]

for(i=0;i<arr.length;i++){
    for(j=0; j<arr.length-1;j++){
        if(arr[j]>arr[j+1]){
            let k = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = k
        }
    }
}

console.log(arr)