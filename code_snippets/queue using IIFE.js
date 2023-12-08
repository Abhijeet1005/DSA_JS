
let queue = (()=>{
    let arr = []
    return {
        enqueue: (elem)=>{
            arr.unshift(elem)
            return arr
        },
        dequeue: (elem)=>{
            arr.pop()
            return arr
        }
    }
})()

//tests
console.log(queue.enqueue(10))
console.log(queue.enqueue(20))
console.log(queue.enqueue(30))
console.log(queue.enqueue(40))
console.log(queue.dequeue())