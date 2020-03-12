const {DoublyLinkedList} = require('./helpers');
/**
 * Remove Dups! Write code to remove duplicates from an unsorted linked list.
 */ 
const linkedList = new DoublyLinkedList;
linkedList.push(10).push(10).push(15).push(30).push(30).push(15);

/**
 * @param {DoublyLinkedList} linkedList 
 * Time Complexity O(n)
 * Space Complexity O(n)
 */

function removeDuplicates(linkedList) {
    if(linkedList.length <= 1) return

    var table = new Map();
    var tail = linkedList.tail;
    helper(linkedList.head);


    function helper(node) {
        if(node === null) return

        if(!table.has(node.val)) {
            table.set(node.val);
            helper(node.next);

        } else {
            if(node === tail) {
                let prevNode = node.prev;
                // Removing references of the removed node
                prevNode.next = null;
            } else {

                let prevNode = node.prev;
                let nextNode = node.next;

                // Removing references of the removed node
                prevNode.next = nextNode;
                nextNode.prev = prevNode;
            }

            linkedList.length--;
            helper(node.next);
        }

    }
}

/**
 * @param {DoublyLinkedList} linkedList
 * Time Complexity O(n²)
 * Space Complexity O(1)
 */
function removeDupWithoutBufffer(linkedList) {
    var node = linkedList.head;

    while (node !== null) {
        let nodeInner = node.next;

        while (nodeInner !== null) {

            if (node.val === nodeInner.val) {
                // Updating the length
                linkedList.length--;

                if (nodeInner.next === null) {
                    let prevNode = nodeInner.prev;

                    // Removing references of the removed node
                    prevNode.next = null;
                    
                    // Updating the tail
                    linkedList.tail = prevNode;
                } else {

                    let prevNode = nodeInner.prev;
                    let nextNode = nodeInner.next;

                    // Removing references of the removed node
                    prevNode.next = nextNode;
                    nextNode.prev = prevNode;
                }
            }

            nodeInner = nodeInner.next;
        }

        node = node.next;
    }
}

removeDupWithoutBufffer(linkedList);
// removeDuplicates(linkedList);
console.log(linkedList);
