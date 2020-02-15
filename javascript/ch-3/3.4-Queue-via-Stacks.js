class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
/**
 * Class Stack copied from https://github.com/rithmschool/javascript_computer_science_exercises/blob/solutions/stacks_exercise/stacks.js
 */
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        var node = new Node(val);
        if (!this.first) {
            this.first = node;
            this.last = node;
        }
        else {
            var tmp = this.first;
            this.first = node;
            this.first.next = tmp;
        }
        return ++this.size;
    }

    pop() {
        if (!this.first)
            return null;
        var temp = this.first;
        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }

    peek() {
        return this.first.value;
    }

    isEmpty() {
        return this.first === null;
    }
}

class MyQueue {
    constructor() {
        this.stack1 = new Stack;
        this.stack2 = new Stack;
        this.size = 0;
    }

    enqueue (value){
        
        if( ( this.stack1.isEmpty() && this.stack2.isEmpty() ) || !this.stack1.isEmpty()) {
            this.stack1.push(value);
            this.size = this.stack1.size;
        } else {

            while( !this.stack2.isEmpty()) {
                this.stack1.push(this.stack2.pop());
            }

            this.stack1.push(value);
            this.size = this.stack1.size;
        }

        return this.size;
    }

    dequeue() {
        if( this.stack1.isEmpty() && this.stack2.isEmpty() ) {
            return null;
        }

        if( this.stack2.isEmpty() ) {
            while( !this.stack1.isEmpty() ) {
                this.stack2.push(this.stack1.pop());
            }

            this.size--;
            return this.stack2.pop();
        } else {
            this.size--;
            return this.stack2.pop();
        }
    }
}

var myQueue = new MyQueue;

console.log(myQueue.enqueue(5), "should return 1");
console.log(myQueue.size, "should return 1");
console.log("-------------");

console.log(myQueue.enqueue(7), "should return 2");
console.log(myQueue.size, "should return 2");
console.log("-------------");

console.log(myQueue.enqueue(4), "should return 3");
console.log(myQueue.size, "should return 3");
console.log("-------------");

console.log(myQueue.dequeue(), "should return 5");
console.log(myQueue.size, "should return 2");
console.log("-------------");

console.log(myQueue.dequeue(), "should return 7");
console.log(myQueue.size, "should return 1");
console.log("-------------");

console.log(myQueue.dequeue(), "should return 4");
console.log(myQueue.size, "should return 0");
console.log("-------------");

console.log(myQueue.dequeue(), "should return null");
console.log(myQueue.size, "should return 0");
console.log("-------------");