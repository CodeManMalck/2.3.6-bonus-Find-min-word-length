function findMinLength(str1, str2) {
    return str1.length<=str2.length ? str1.length : str2.length;
}

var shortStrLen = findMinLength('a', 'bee');
console.log(shortStrLen);