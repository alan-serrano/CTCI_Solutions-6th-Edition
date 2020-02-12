/* Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. (Note: If implementing in Java, please use a character array so that you can
perform this operation in place.) */

var input = "Mr John Smith   ";

/**
 * This function remove the spaces in the string
 * @param {string} str 
 * @param {integer} length 
 * Complexity Time O(n2)
 * Complexity Space O(1)
 */

function removeString1(str, length) {
    var stringConverted = '';

    for(var i=0; i < length; i++) {
        if(str[i] === " ") {
            stringConverted+="%20";
        } else {
            stringConverted +=str[i];
        }
    }

    return stringConverted;
}

/**
 * This function remove the spaces in the string
 * @param {string} str 
 * @param {integer} length 
 * Complexity Time O(n)
 * Complexity of Additional Space O(1)
 */

function removeString2(str, length) {
    // Counting the spaces in the string
    var spaceCount = 0;
    for (let i = 0; i < length - 1; i++) {
        if(str[i] === " ") {
            spaceCount++;
        }
    }

    // Creating an array with all the space needed
    let spaceNedeed = length + spaceCount * 3;
    let newStr = new Array(spaceNedeed);21

    // Adding each character in the newStr
    for (let i = length - 1, j = spaceNedeed - 1; i >= 0; i--, j--) {
        if(str[i] === " ") {
            newStr[ j ]   = "0";
            newStr[ --j ] = "2";
            newStr[ --j ] = "%";
        } else {
            newStr[j] = str[i];
        }
    }

    return newStr.join("");
}

/* Using methods of javascript */

function removeStringWithMethods(str) {
    var stringConverted = str.trim().replace(/ /g, "%20");
    return stringConverted;
}

console.log(removeString1(input, 13)); // Mr%20John%20Smith
console.log(removeString2(input, 13)); // Mr%20John%20Smith
console.log(removeStringWithMethods(input)); //Mr%20John%20Smith

