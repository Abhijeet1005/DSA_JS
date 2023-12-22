class Node{
    constructor(value){
        this.value = value
        this.left =  null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
        let temp = this.root
    }
    insertrec(val){
        if(!this.root) this.root = new Node(val)
        if(val > temp.value){
            if(!temp.right){
                temp.right = new Node(val)
            }
            else{
                temp = temp.right
                this.insertrec(val)
            }
        }else{
            if(!temp.left){
                temp.left = new Node(val)
            }else {
                temp = temp.left
                this.insertrec(val)
            }
        }
    }
    insert(val){
        if (this.root === null) this.root = new Node(val)
        else{
            let temp = this.root
            let flag = true
            while(flag){
                if(val >  temp.value){
                    if(!temp.right) {temp.right = new Node(val); flag = false}
                    else{ temp = temp.right }
                }else{
                    if(!temp.left) { temp.left = new Node(val); flag = false}
                    else{temp = temp.left}
                }
            }
        }
    }
    contains(val){
        if(!this.root) return null
        else{
            let temp = this.root
            while(temp){
                if(val === temp.value) return temp
                else if(val < temp.value){
                    temp = temp.left
                }
                else{
                    temp = temp.right
                }
            }
            return null
        }
    }
    minValueNode(currentNode){
        while(currentNode){
            if(currentNode.left.value < currentNode.value) currentNode = currentNode.left
        }return null
    }
}