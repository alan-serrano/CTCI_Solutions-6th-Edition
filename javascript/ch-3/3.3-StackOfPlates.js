/* 
    Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
    Therefore, in real life, we would likely start a new stack when the previous stack exceeds some
    threshold. Implement a data structure SetOfStacks that mimics this. SetO-fStacks should be
    composed of several stacks and should create a new stack once the previous one exceeds capacity.
    SetOfStacks. push() and SetOfStacks. pop() should behave identically to a single stack
    (that is, pop () should return the same values as it would if there were just a single stack).
    FOLLOW UP
    Implement a function popAt ( int index) which performs a pop operation on a specific sub-stack.
    Hints:#64, #87
*/

/* 
 If the one stack reach threshold, create another Stack on the array
 E: If set of stacks is empty
*/

class SetOfStacks {
    constructor(threshold) {
        this.stacks = [];
        this.threshold = threshold;
    }

    push(value) {
        // If setOfStacks is empty
        if( this.isEmpty ) {
            this.stacks.push(new Stack(value));
            return this;
        }

        let lastStack = this.getLastStack();

        // If current Stack is full
        if(lastStack.size >= this.threshold ) {
            this.stacks.push( new Stack(value) )
        } else {
            lastStack.push(value);
        }

        return this;
    }

    pop() {
        // If SetOfStacks is empty
        if( this.isEmpty ) return;

        let lastStack = this.getLastStack();
        let popValue = lastStack.pop();

        // If the stack is empty after pop, remove the lastStack
        if(lastStack.size === 0) {
            this.stacks.length = this.stacks.length - 1;
        }

        return popValue;
    }

    popAt(index) {

        // If the index is greater than the length of the stack
        if(index > this.stacks.length - 1) return;

        let stack = this.stacks[index];
        let popValue = stack.pop()

        // Empty Stack
        if( stack.size === 0 ) {
            this.stacks.splice(index, 1);
        }
        
        return popValue;
    }

    get isEmpty() {
        return this.stacks.length === 0;
    }

    getLastStack() {
        return this.stacks[this.stacks.length - 1];
    }
}

class Stack {
    constructor(value) {
        if(value !== undefined) {
            this.data = [value];
            this.size = 1;
        } else {
            this.data = [];
            this.size = 0;
        }
    }

    pop() {
        if(this.size === 0) {
            return;
        }

        this.size--;
        return this.data.pop()
    }

    push(value) {
        this.size++;
        this.data.push(value);
    }
}

setOfStacks = new SetOfStacks(10);

for(let i = 0; i < 30; i++) {
    setOfStacks.push(i);
}

for( let i = 0; i < 10; i++ ) {
    setOfStacks.popAt(1);
}

console.log(setOfStacks);