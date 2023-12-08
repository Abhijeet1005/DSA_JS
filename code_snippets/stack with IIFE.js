//Trying to make stacks inside an IIFE with limited functions so that it wont behave like a normal array and the prototype methods won't work from the outside
maxSize = 1
let stack = (function(maxSize){
    let arr = [];
    let max = maxSize
    return {
        insert: (elem)=>{
            if(arr.length < max){
                arr.push(elem)
                return [...arr]
            }
            else{
                return "Max size reached"
            }
        },
        remove: (elem)=>{
            arr.pop()
            return [...arr]
            
        },
        display: ()=>{
            return arr
        },
    }
})(maxSize)

//Test
stack.insert(200)
stack.insert(100)
console.log(stack.insert(10))
console.log(stack.remove())


