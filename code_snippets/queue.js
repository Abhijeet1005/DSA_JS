class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(value){
        const newNode = new Node(value)
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }
    enqueue(value){
        const newNode = new Node(value)
        if(!this.last){
            this.first = newNode;
            this.last = newNode;
            this.length++
        }
        else{
            this.last.next = newNode;
            this.last = newNode;
            this.length++;
        }
    }
    dequeue(){
        if(!this.first) return undefined
        else{
            let temp = this.first
            this.first = this.first.next
            this.length--
            if(this.length === 0) this.last = null
            return temp
        }
        
    }
}