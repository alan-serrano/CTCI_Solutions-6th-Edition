const {SinglyLinkedList} = require('./helpers');
/* 
Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but
the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
that node.
EXAMPLE
lnput:the node c from the linked lista->b->c->d->e->f
Result: nothing is returned, but the new linked list looks like a->b->d->e- >f
Hints:#72
*/

/* 
I: A Node of a linked list
O: true or false
C: You don't have acces to the head node
E: the last element
*/

var ll = new SinglyLinkedList();

ll.push(1)
    .push(5)
    .push(9)
    .push(12)

var givenNode = ll.__get(2);

function DeleteMiddleNode1(node) {
    if( !node || !node.next ) return false;

    nextNode = node.next;
    node.val = nextNode.val;
    node.next = nextNode.next;

    return true;
}


console.log(ll.toString()); // [1,5,9,12]
DeleteMiddleNode1(givenNode); 
console.log(ll.toString()); // [1,5,12]