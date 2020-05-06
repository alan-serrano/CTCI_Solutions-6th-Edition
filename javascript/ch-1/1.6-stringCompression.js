/*
Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).
*/

/* 
    Using current and next character approach
*/
function compress(str) {
    let compressedString = '';
    let counter = 0;

    for(let i = 0; i < str.length; i++) {
        counter++;
        let char = str[i];
        let nextChar = str[i+1];

        if( i === str.length - 1 || char !== nextChar ) {
            compressedString += char + counter;
            counter = 0;
        } 
    }

    return compressedString;
}

/* 
    Using previous and current character approach
*/
function compress1(str) {
    if( str.length === 0 ) return;
    let count = 0;
    let prevCh = str[0];
    let result = '';

    for(let ch of str) {
        if( prevCh !== ch ) {
            result += count;
            count = 0;
        }

        if( count === 0 ) {
            result += ch;
        }
        
        count++;
        prevCh = ch;
    }

    result += count;

    return result;
}

(function test() {
    const str1 = 'aabcccccaaa';
    
    console.log(compress(str1));
    console.log(compress1(str1));
})()