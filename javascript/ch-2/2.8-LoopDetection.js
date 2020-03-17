const {DoublyLinkedList} = require('./helpers');


/* 
Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the
beginning of the loop.

DEFINITION
Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so
as to make a loop in the linked list.
EXAMPLE
Input:
A -> B -> C -> D -> E -> C [the same C as earlier]
Output:
C
Hints: #50, #69, #83, #90
*/

const linkedList = new DoublyLinkedList();
linkedList.push('A')
    .push('B')
    .push('C')
    .push('D')
    .push('E');

const linkedList2 = new DoublyLinkedList();
linkedList2.push('A')
    .push('B')
    .push('C')
    .push('D')
    .push('E');

// Creating a circular list
const nodeE =  linkedList.__get(4);
nodeE.next = linkedList.__get(2);

// Solution using maps on javascript
// create a map
// Store each node during the loop
// If the map has already a node, return that node
function isCircular(ll) {
    linkedListMap = new Map();
    let node = ll.head;

    while(node) {
        if(linkedListMap.has(node)) {
            return node;
        } else {
            linkedListMap.set(node);
        }

        node = node.next;
    }

    return false;
}

// Solution with the floyd's algorithm for finding the cycle of a loop
// Two pointers, 1 pointer 

/*
    k steps
    A->B->C->D->C

*/

function findCycleFloy(ll) {
    let slowPointer = ll.head;
    let fastPointer = ll.head;

    while(fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;

        if(slowPointer === fastPointer) {
            areMet = true;
            slowPointer = ll.head;
            break;
        }

    }

    if( !fastPointer || !fastPointer.next) {
        return false;
    }

    while(slowPointer !== fastPointer) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
    }
    
    return fastPointer;
}
console.log("----------------------");
console.log(isCircular(linkedList)); // Node C
console.log("----------------------");
console.log(isCircular(linkedList2)); // False
console.log("----------------------");
console.log(findCycleFloy(linkedList)); // Node C
console.log("----------------------");
console.log(findCycleFloy(linkedList2)); // False