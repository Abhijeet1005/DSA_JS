class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    push(value){
        const newNode = new Node(value)
        if(!this.tail){
            this.head = newNode;
            this.tail = newNode;
            this.length++
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    pop(){
        if(this.length >1){
            let temp = this.head
            let pre = this.head
            while(temp.next != null){
                pre = temp
                temp = temp.next
            }
            pre.next = null
            this.tail = pre
            this.length--
            return temp
        }
        if(this.length = 1){
            let temp = this.head
            this.head = null
            this.tail = null
            this.length--
            return temp
        }
        if(this.length <= 0) return undefined
    }

}

// const LL = new LinkedList(10)
// LL.push(20)
// LL.push(30)
// LL.push(40)
// LL.pop()
// LL.pop()
// console.log(LL.pop())
// console.log(LL.pop())
// console.log(LL.pop())
