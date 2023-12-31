class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length= 1;
    }

    push(value){
        const newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this
    }

    pop(){
        if(!this.head) return undefined;

        let temp = this.head;
        let pre = this.head;

        while(temp.next){
            pre = temp;
            temp = temp.next
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return temp;
    }

    unshift(value){
        const newNode = new Node(value)
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode
        }  
        this.length++
        return this
    }

    shift(){
        if(this.head === null) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        
        temp.next = null
        this.length--;

        if(this.length === 0){
            this.tail = null
        }

        return temp
    }
}

const myLinkedList = new LinkedList(11)
myLinkedList.push(2)
myLinkedList.push(23)
myLinkedList.push(7)

console.log(myLinkedList)

myLinkedList.shift();
myLinkedList.shift();
myLinkedList.shift();
myLinkedList.shift();

console.log("Final LinkedList: ",myLinkedList)