/* 
    Palindrome Permutation: Given a string, write a
    function to check if it is a permutation of a palindrome.
    A palindrome is a word or phrase that is the same forwards and backwards.A
    permutation is a rearrangement of letters.The palindrome does not need to be limited to just
    dictionary words.
*/

// 1.- Create a map of the string
// 2.- Verify if there are at most one character with odd repetitions.
// This is case insensitive, an has to work with just letters
function palindromePermutation1(str) {
    if( str.length === 0 ) return false;

    const map = createMap(str);
    let countOdd = 0;

    for( let ch in map ) {
        if( map[ch] % 2 !== 0 ) countOdd++;
        if( countOdd > 1 ) return false;
    }

    return true;
}

function createMap(str) {
    const map = {};

    for ( let ch of str.toUpperCase().replace(/[^a-zA-Z]+/g, '', "") ) {
        map[ch] = map[ch] + 1 || 1;
    }

    return map;
}

function test() {
    const str1 = "aabbc";
    const str2 = "aabc";
    const str3 = "Tact Coa! 21";

    console.log( palindromePermutation1(str1), ": true" );
    console.log( palindromePermutation1(str2), ": false" );
    console.log( palindromePermutation1(str3), ": true" );
}

test();