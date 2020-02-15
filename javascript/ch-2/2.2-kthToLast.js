import * as helpers from './helpers.js';

/* 2.2 Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.*/

const linkedList = new helpers.DoublyLinkedList;

// Adding elementos to linked list
linkedList.push(5).push(10).push(17).push(40);


/**
 * A nonrecursive solution If I know the size of the linked list
 * @param {helpers.DoublyLinkedList} ll 
 * @param {number} k
 * Complexity Time O(n)
 * Complexity Additional Space O(1)
 */

function kthToLast1(ll, k) {
    var index = ll.length - k;
    var count = 0;
    
    // Traversing the linked list to find the index element
    for(var el = ll.head; el !== null && count !== index; el = el.next) {
        count++;
    }

    return el.val
}

/**
 * A recursive solution If I know the size of the linked list
 * @param {helpers.DoublyLinkedList} ll 
 * @param {number} k
 * Complexity Time O(n)
 * Complexity Additional Space O(1)
 */

function kthToLast1Recursive (ll, k) {
    var index = ll.length - k;
    
    if(k > ll.length - 1) return "Linked List is not long enough "

    return helper(ll.head);
    
    function helper(currentElement, counter = 0) {
        if(counter === index) {
            return currentElement.val;
        } else  {
            return helper(currentElement.next, ++counter);
        }
    }
}

/* If I don't Know the size */

/**
 * A recursive solution If I don't know the size of the linked list
 * @param {helpers.DoublyLinkedList} ll 
 * @param {Number} k 
 */

function kthToLast2Recursive (ll, k) {
    var kthVal;

    helper(ll.head);
    
    function helper(node) {
        if(node === null) return 0;

        var index = helper(node.next) + 1;

        if(index === k) {
            kthVal = node.val;
        }

        return index;
    }

    return kthVal;
}

/**
 * An iterative solution If I don't know the size of the linked list
 * @param {helpers.DoublyLinkedList} ll 
 * @param {number} k
 * Complexity Time O(n)
 * Complexity Additional Space O(1)
 */

function kthToLast2Iterative(ll, k) {
    var p1 = ll.head;
    var p2 = ll.head;

    //Moving p1 k nodes into the list
    for (let i = 0; i < k; i++) {
        if(p1 === null) return null;
        p1 = p1.next;
    }

    while(p1 !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p2.val;
}

console.log(kthToLast1(linkedList, 2)); // 17
console.log(kthToLast1Recursive(linkedList,2)); // 17
console.log(kthToLast2Recursive(linkedList,2)); // 17
console.log(kthToLast2Iterative(linkedList,2)); // 17