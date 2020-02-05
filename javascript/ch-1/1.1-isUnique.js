/* Brutal force */

/** 
 * Function algorithm to determine if a string has all unique characters
 * @var {st} as string
 * 
 * isUnique("#44") --> false
 * isUnique("#177") --> false
 * isUnique("#132") --> false
*/

/* First Aproach, complexity 0(n^2)*/
function isUnique(st) {
    for(var i=0; i<st.length - 1; i++) {
        for(var j=i+1; j<st.length; j++) {
            if(st[i] == st[j]) return false;
        }
    }

    return true;
}

console.log("#44", isUnique("#44"));
console.log("#177", isUnique("#177"));
console.log("132", isUnique("#132"));

/* Optimizing */