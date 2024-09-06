export class Queue{
    constructor(){
        this.queue = [];
    }

    push(data){
        this.queue.push(data);
    }

    shift(){
        this.queue.shift()
    }

    getHead(){
        if(this.queue.length != 0){
            return this.queue[0];
        }
        return 'the queue is empty'
    }

    get(n){
        return this.queue[n];
    }

    edit(n, value){
        this.queue[n] = value;
    }

    clear(){
        this.queue = [];
    }

    size(){
        this.queue.forEach((i)=>{
            return i
        })
    }

    isEmpty(){
        return this.queue == null;
    }
}