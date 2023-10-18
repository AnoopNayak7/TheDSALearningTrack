var lengthOfLastWord = function(s) {
    let words = s.trim().split(" ")
    return words[words.length-1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))