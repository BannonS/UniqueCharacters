// Write your code below
function hasUniquechar(word) {
    const charCheck = {};
    for(i = 0; i < word.length; i++) {
    const char = word[i]
    if (charCheck[char]) {
        return false;
        }
    charCheck[char] = true; 
    }
    return true;
}
const word1 = 'Gilgamesh'
console.log(hasUniquechar(word1))
