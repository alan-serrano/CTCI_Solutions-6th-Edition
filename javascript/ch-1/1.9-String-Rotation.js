/*String Rotation: Assume you have a method isSubstring which checks if one word is a substring
of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one
call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat"). */

/* 
Examples:

Rotations of house:
ouseh
 useho
  sehou
   ehous
*/

/**
 * For each word, I do all rotations
 * The rotations would be store on a Map then
 * If the map has the key of "s2", is a rotation of 
 * @param {string} s1   First string
 * @param {string} s2   String to check if it is a rotated version of str1
 * @return {boolean}    True if str1 and str2 are rotated versions of eachother, otherwise false
 * Complexity time O(n2)
 * Complexity Additional Space O(1)
 */
function isRotatedString(s1, s2) {
    var s1ToArr = s1.split("");
    var objWithRotations = new Map();

    for (let i = 0 ; i < s1.length; i++) {
        let tmp = new Array(s1.length);

        for (let j = 0, pointer = i; j < tmp.length; j++, pointer++) {
            if(pointer === tmp.length) {
                pointer = 0;
                tmp[j] = s1[pointer];
            } else {
                tmp[j] = s1[pointer];
            }
        }

        objWithRotations.set(tmp.join(""));
    }

    if(objWithRotations.has(s2)) {
        console.log(true);
    } else {
        console.log(false);
    }
}


/**
 * Convert the s1 into a map: The keys would be:
 * {
 *      eachLetterOfS1: [PointersTotheNextLetterOnS1]
 * }
 * In this way, we have to check if each next letter in s2, is equal to a pointer to S1
 * @param {string} s1   First string
 * @param {string} s2   String to check if it is a rotated version of str1
 * @return {boolean}    True if str1 and str2 are rotated versions of eachother, otherwise false
 * Complexity time O(2n) => O(n)
 * Complexity additional space O(1)
 */

function isRotatedString2(s1, s2) {
    // Creating new Map
    var objOfLetters = new Map;

    // If the lengths of the strings are differente, return false
    if(s1.length !== s2.length) {
        return false;
    }

    // If the strings are equal, there are no rotations
    if(s1 === s2) return false;

    // Adding each letter as a key, and a pointer to the next letter
    for (let i = 0; i < s1.length; i++) {

        // Handling collisions
        if(! objOfLetters.has(s1[i])) {
            if(i === s1.length - 1) {
                objOfLetters.set(s1[i], [0]);
            } else {
                objOfLetters.set(s1[i], [i + 1]);
            }
        } else {
            if (i === s1.length - 1) {
                objOfLetters.get(s1[i]).push(0);
            } else {
                objOfLetters.get(s1[i]).push(i + 1);
            }
        }
    }

    // Comparing each next letter with a pointer to s1
    for (let i = 0; i < s2.length; i++) {

        if( objOfLetters.has(s2[i]) ) {
            let pointers = objOfLetters.get( s2[i] );

            pointers.forEach(pointer => {
                if ( s2[i+1] !== s1[pointer]) return false
            });

        } else {
            return false;
        }
    }
    
    return true;
}

isRotatedString("waterbottle", "erbottlewat");
console.log( isRotatedString2( "waterbottle", "erbottlewat" ) );