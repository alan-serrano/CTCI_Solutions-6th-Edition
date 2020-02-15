class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.min = null; // The minimum value of the substack including itself
    }
}

class MinStack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /**
     * @param {number} value 
     * Complexity time O(1)
     */
    push(value) {

        var node = new Node(value)

        if(this.size === 0) {
            // Initialize
            this.first = node;
            this.last = node;
            
            // Adding the minimun value
            node.min = node.value;

            return ++this.size;

        } else {
            
            // Updating the top of the stack
            let tmp = this.first;
            this.first = node;
            this.first.next = tmp;

            // Updating the minimun
            this.first.min = Math.min(value, this.first.next.min);
        }

        return ++this.size;
    }

    /**
     * Complexity time O(1)
     */
    pop() {

        if(this.size === 1) {
            // Reference to removed node
            let poppedNode = this.first;

            // Reset Stack
            this.first = null;
            this.last = null;
            this.size = 0;

            return poppedNode.value;

            
        } else if(this.last === null){

            return null;

        } else {
            // Reference to removed node
            let poppedNode = this.first;

            //Update the size
            this.size--;

            // Update reference to the first node
            this.first = this.first.next;

            return poppedNode.value
        }
    }

    /**
     * Complexity time O(1)
     */
    min() {
        if(this.first) {
            return this.first.min; 
        } else {
            return "Stack is empty"
        }
    }
}

var minStack = new MinStack;

/* Adding 5 to the stack */
console.log(minStack.push(5), "should be", "1");
console.log(minStack.min(), "should be", "5"); 
console.log(minStack.size, "should be", "1");
console.log("-----------------");

/* Adding 2 to the Stack */
console.log(minStack.push(2), "should be", "2");
console.log(minStack.min(), "should be", "2");
console.log(minStack.size, "should be", "2");
console.log("-----------------");

/* Adding 1 to the Stack */
console.log(minStack.push(1), "should be", "3");
console.log(minStack.min(), "should be", "1");
console.log(minStack.size, "should be", "3");
console.log("-----------------");

/* Popping the stack */
console.log(minStack.pop(), "should be", "1");
console.log(minStack.min(), "should be", "2");
console.log(minStack.size, "should be", "2");
console.log("-----------------");

/* Popping the stack */
console.log(minStack.pop(), "should be", "2");
console.log(minStack.min(), "should be", "5");
console.log(minStack.size, "should be", "1");
console.log("-----------------");

/* Popping the stack */
console.log(minStack.pop(), "should be", "5");
console.log(minStack.min(), "should be", "Stack is empty");
console.log(minStack.size, "should be", "0");
console.log("-----------------");

/* Popping the stack */
console.log(minStack.pop(), "should be", "null");
console.log(minStack.min(), "should be", "Stack is empty");
console.log(minStack.size, "should be", "0");
console.log("-----------------");

// console.log(minStack.push(10));