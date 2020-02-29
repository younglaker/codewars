/*
https://www.codewars.com/kata/54ff3102c1bad923760001f3

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.

 */

function getCount(str) {
  var vowelsCount = 0;

  // enter your majic here
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u') {
      vowelsCount+=1;
    }
  }

  return vowelsCount;
}


function getCount(str) {
  return (str.match(/[aeiou]/ig) || []).length
}