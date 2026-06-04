function findMinLength(word1,word2) {
    if (word1.length < word2.length){
        return word1.length
}   else  {
        return word2.length
} 
    }

    var output = findMinLength("abracadabra","hippopotamus")

    console.log(output)