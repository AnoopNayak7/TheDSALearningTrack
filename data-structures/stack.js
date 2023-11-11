class Stack{
    constructor(){
        this.stack = []
    }

    push(element){
        this.stack.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        this.stack.pop()
    }

    isEmpty(){
        return this.size() === 0
    }

    peek(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        return this.stack[this.size() -1]
    }

    size(){
        return this.stack.length
    }
}