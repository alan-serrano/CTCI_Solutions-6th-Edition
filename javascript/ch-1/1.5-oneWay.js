function isEdited(str1, str2) {
    // Verify if string1 has the same number of caracters of string2
    let counter = 0;
    let j = 0;

    if(str1.length == str2.length) {
        // Verify if there was an replacement
        for (let i = 0; i < str1.length; i++) {
            if(str1[i] != str2[i]) {
                counter++;
            }
        }
    }

    else {
        if(str2.length < str1.length) {
            // Verify if there was an deletion
            for (let i = 0; i < str1.length; i++) {
                if(str1[j] !== str2[i]) {
                    counter++;
                    j++;
                }

                j++;
            }
            

        } else {
            // Verify if there was an insertion
            for (let i = 0; i < str2.length; i++) {
                if(str1[i] !== str2[j]) {
                    counter++;
                    j++;
                }
                j++;
            }
        }
    }

    if(counter == 1) return true;
    return false;
}

console.log(isEdited("pele", "pale")); // true
console.log(isEdited("pales", "peles")); // true
console.log(isEdited("hola", "hola")); // false