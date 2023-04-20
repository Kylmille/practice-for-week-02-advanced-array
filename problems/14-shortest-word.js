/*
Write a function `shortestWord` that accepts a sentence as an argument.
The function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

*/

 let shortestWord = function(sentence) {
    let words = sentence.split(" ");
    let shortest = words.reduce(function(shortest, current) {

      if (current.length < shortest.length || (current.length === shortest.length && sentence.indexOf(current) > sentence.indexOf(shortest))) {
        shortest = current;
      }
      return shortest;
    }, words[0]);

    return shortest;
};



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = shortestWord;
} catch (e) {
  module.exports = null;
}
