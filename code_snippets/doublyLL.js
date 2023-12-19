class Node{
    constructor(value){
        this.value = value,
        this.next = null,
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            this.length++
        }
        else{
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
            this.length++
        }return this
    }
    pop(){
        let temp = this.tail
        if(!this.head) return null
        else if(this.length === 1){
            this.head = null
            this.tail = null
            this.length--
            return temp
        }
        else{
            this.tail = temp.prev
            this.tail.next = null
            temp.prev = null
            this.length--
            return temp
        }
    }
    unshift(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            this.length++
        }
        else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
            this.length++
        }
    }
    shift(){
        let temp = this.head
        if(!this.head) return null
        else if(this.length === 1){
            this.head = this.head.next
            this.tail = this.head
            this.length--
            return temp
        }
        else{
            this.head = this.head.next
            this.head.prev = null
            temp.next = null
            this.length--
            return temp
        }
    }
    get(index){
        if(index < 0 || index > this.length) return undefined
        else{
            let temp = this.head
            for(i=0;i<index;i++){
                temp = temp.next
            }
            return temp
        }
    }
    set(value,index){
        if (this.length === 0) return this.unshift(value)
        let temp = this.get(index)
        if(temp){
            temp.value = value
        }
        return temp
    }
    insert(index,value){
        if(index <0 || index >this.length) return false
        else if(index === 0) return this.unshift(value)
        else if(index === this.length) return this.push(value)
        else{
            let newNode = new Node(value)
            let after = this.get(index)
            let before = after.prev
            newNode.next = after
            newNode.prev = before
            before.next = newNode
            after.prev = newNode
            this.length++
        }
    }
    remove(index){
        if(index <0 || index >= this.length) return undefined
        else if(index === 0) return this.shift()
        else if(index === this.length-1) return this.pop()
        else{
            let temp = this.get(index)
            let before = temp.prev
            let after = temp.next
            before.next = after
            after.prev = before
            temp.next = null
            temp.prev = null
            this.length--
            return temp
        }
    }
}