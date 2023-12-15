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
        else{
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }

    }
    pop(){
        let temp = this.head
        if(this.length < 1) return undefined

        else if(this.length === 1){
            this.head = null
            this.tail = null
            this.length--
            return temp
        }

        else if(this.length >1){
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
    }
    unshift(value){
        const newNode = new Node(value)
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
            this.length++
        }
        else{
            newNode.next = this.head
            this.head = newNode
            this.length++
        }
    }
}

const LL = new LinkedList(10)
LL.pop()
console.log(LL)
LL.unshift(90)
console.log(LL)
