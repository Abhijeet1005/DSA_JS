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
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    shift(){
        if(!this.head) return undefined
        else{
            let temp = this.head
            this.head = this.head.next
            this.length--
            if(this.length === 0) this.tail = null
            return temp
        }
        
    }
    get(index){
        if(index <0 || index > this.length) return null
        else{
            temp = this.head
            for(i=0;i<index;i++){
                temp = temp.next
            }
            return temp
        }
    }
    set(index,value){
        let node = this.get(index)
        if(node){
            node.value = value
            return true
        }return false
    }
    insert(index,value){
        if(index <0 || index > this.length) return false
        else if(index === 0) return this.unshift(value)
        else if(index === this.length) return this.push(value)
        else{
            let node = new Node(value)
            let temp = this.get(index-1)
            node.next  = temp.next
            temp.next = node
            this.length++
            return true
        }
    }
    remove(index){
        if(index <0 || index >= this.length) return null
        else if(index === 0) return this.shift()
        else if(index === this.length-1) return this.pop()
        else{
            let temp = this.get(index-1)
            let rmNode = temp.next 
            temp.next = rmNode.next
            rmNode.next = null
            this.length--
            return rmNode
        }
    }
    reverse(){
        if(!this.tail) return null
        else if(this.length === 1) return this.head
        else{
            let prev = null
            let temp = this.head
            let next = null
            for(i=0;i<this.length;i++){
                next = temp.next
                temp.next = prev
                prev = temp
                temp = next
            }
            temp = this.head
            this.head = this.tail
            this.tail = temp
            return this
        }
    }
    // findMiddleNode() {
        
    // }
}

const LL = new LinkedList(10)
LL.pop()
console.log(LL)
LL.unshift(90)
console.log(LL)
