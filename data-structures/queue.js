class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(element){
        this.queue.push(element);
    }

    // removes first element from the queueu
    dequeue(){
        if(this.isEmpty()){
            return "Underflow";
        }
        return this.queue.shift();
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    front(){
        if(this.isEmpty()){
            return "No element in the queue";
        }
        return this.queue[0]
    }

    size(){
        return this.queue.length
    }

    printQueue(){
        let queueString = ""
        for (let i = 0; i < this.size(); i++) {
            queueString += this.queue[i] + ", ";
        }
        console.log("Queue:", queueString)
    }
}

const myQueue = new Queue();
myQueue.enqueue(5)
myQueue.enqueue(10)
myQueue.enqueue(15)

myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()

console.log(myQueue.dequeue())

