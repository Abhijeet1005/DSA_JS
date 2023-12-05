
// function fact(num){
//     if(num === 0) return 1
//     if(num < 0) return "Not valid"
//     return num * fact(num-1)
// }
// console.log(fact(-1))

//With while loop
num  = 3
fact = 1
if(num < 0) fact  = `not valid`
while(num>0){
    if(num != 0){
        fact = fact*num
        num--
    }
}

console.log(fact)