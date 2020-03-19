/* 
    Check Permutation: Given two strings, write a method to decide if one is a permutation of the
    other.
    
    Hints: #7, #84, #722, #737
    I: Two strings
    O: Boolean
    E: Just alphanumeric values, Case Insensitive
*/

/**
 * Solution 1
 * Sort the strings an verify if they are equal
 * Time Complexity O(nLogn)
 * Additional Space O(1)
 */

function checkPermutation1(s1, s2) {
    s1 = s1.replace(/[^a-z0-9]/gi,'').split('').sort().join('');
    s2 = s2.replace(/[^a-z0-9]/gi,'').split('').sort().join('');

    if( s1 === s2 ) return true;

    return false;
}




/**
 * Solution 2.- Check if the two strings have identical character counts.
 * Time Complexity => O(m+n)
 * Additional Space O(m+n)
 */
function checkPermutation(s1, s2) {
    if( s1.length !== s2.length ) return false;

    let mapS1 = createMap(s1); // key: ch, value: repetition
    let mapS2 = createMap(s2);

    for(let key in mapS1) {
        if( mapS1[key] !== mapS2[key] ) return false;
    }

    for(let key in mapS2) {
        if( mapS1[key] !== mapS2[key] ) return false;
    }

    return true;

    function createMap(s) {
        let map = {};
        for (const ch of s.toUpperCase()) {
            if( map.hasOwnProperty(ch) ) {
                map[ch]++;
            } else {
                map[ch] = 1;
            }
        }
        
        return map;
    }
}


console.log(checkPermutation1('abbc', 'ccba '));
console.log(checkPermutation1('aabcc', 'ccaab'));
console.log(checkPermutation1('abc', 'aaa'));
console.log(checkPermutation1('ert', 'yui'));