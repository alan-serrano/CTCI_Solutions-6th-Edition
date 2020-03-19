const {SinglyLinkedList} = require('./helpers');
/* 
    Partition: Write code to partition a linked list around a value x, such that all nodes less than x come
    before all nodes greater than or equal to x. If x is contained within the list, the values of x only need
    to be after the elements less than x (see below). The partition element x can appear anywhere in the
    "right partition"; it does not need to appear between the left and right partitions.
*/

/* 
    I: Linked List, number
    O: Linked List
*/

var ll = new SinglyLinkedList();

ll.push(8)
    .push(7)
    .push(6)
    .push(5)
    .push(4)
    .push(3)
    .push(2)

/**
 * Solution 1
 * If it is ok that the linked list doesn't maintain stable
 * 
 * STEPS
 *  Traverse the linked list
 *      if the value of the node is less than partition, move it to the head
 * 
 * Time Complexity O(n)
 * Additional space O(1)
 */
    
function partitionLinkedList1( ll, partition ) {
    if( ll.head === null ) return;

    let node = ll.head.next;
    let prev = ll.head;

    while(prev && node) {
        let nextNode = node.next;
        let nextPrev = prev.next;
        
        if( node.val < partition ) {
            // Update prev node
            prev.next = nextNode;

            // Moving to the head
            node.next = ll.head;
            ll.head = node;

        } else {

            prev = nextPrev;
        }

        node = nextNode;
    }

    return;
}

/**
 * Solution 2
 * Constrain: If the linked list has to maintain stable
 * 
 * STEPS
 *  Create two linked list, one "before" an other "after"
 *  Traverse the linked list
 *      if the value of the node is less than partition, push it into before linked list
 *      if the value of the node is greater or equal than partition, push it into after linked list
 *  Join before and after list and return the joined list
 * 
 * Time complexity O(n)
 * Additional Space complexity O(n)
 */    

function partitionLinkedList2(ll, partition) {
    let beforeList = new SinglyLinkedList();
    let afterList = new SinglyLinkedList();

    let node = ll.head;

    while( node ) {
        if( node.val < partition ) {
            beforeList.push( node.val );
        } else {
            afterList.push( node.val );
        }

        node = node.next;
    }

    // Joining the two linked list
    node = beforeList.head;

    while( true ) {
        if(node.next === null) {
            node.next = afterList.head;
            break;
        }

        node = node.next;
    }

    return beforeList;
}

/**
 * Solution 2
 * Constrain: If the linked list has to maintain stable
 * 
 * STEPS
 *  Create a pointer in order to store a point to the last movement
 *  Traverse the linked list
 *      if the value of the node is less than partition, move it after the pointer
 *  Join before and after list and return the joined list
 * 
 *  Edge cases:
 *  - If there is no neccesary to move the node but the node value is less than partition:
 *      - If the node is the head
 *      - If the pointer is the prev node
 *  - If the pointer is not assigned
 * 
 * Time complexity O(n)
 * Additional Space complexity O(1)
 */    

function partitionLinkedList3(ll, partition) {
    let node = ll.head;
    let pointer = null;
    let prev = null;

    while( node ) {
        let nextNode = node.next;
        
        // Edge Cases
        if(node === ll.head || pointer === prev) {
            if( node.val < partition ) {
                pointer = node;
            }

            prev = node;
        }

        else {
            if( node.val < partition ) {

                if( pointer !== null ) {
                    // Updating prev node
                    prev.next = node.next;
    
                    // Moving node after the pointer
                    node.next = pointer.next;
                    pointer.next = node;

                } else if( pointer === null ) {
                    // Updating prev node
                    prev.next = node.next
                    
                    // Moving node to the head
                    node.next = ll.head;
                    ll.head = node;
                    
                }

                // node is the new pointer
                pointer = node;

            } else {
                prev = node
            }
        }

        node = nextNode;
    }
}


console.log(ll.toString());
console.log(partitionLinkedList2(ll, 5).toString());
partitionLinkedList3(ll, 5);
console.log(ll.toString());
