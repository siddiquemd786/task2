// 1 no. question answare

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  console.log(celsiusToFahrenheit(0)); // 32
  console.log(celsiusToFahrenheit(25)); // 77
  
// 2 no. question answare

  function isEven(num) {
    return num % 2 === 0;
  }
  
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false

  // 3 no. question answare

  function sum(a, b) {
    return a+b;
  }
  
  console.log(sum(3, 4)); // 7
  console.log(sum(10, 20)); // 30

// 4 no. question answare

  function findSmallestNum(arr) {
    return Math.min(...arr)
  }
  
  console.log(findSmallestNum([3, 5, 1, 9])); // 1
  console.log(findSmallestNum([-1, -5, 0, 10])); // -5
  
  // 5 no. question answare
  
  function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    
    return count;
  }
  
  console.log(countVowels("hello world")); // 3
  console.log(countVowels("Javascript")); // 3
// 6 no. question answare
  function getFirstElement(arr) {
    return arr[0];
  }
  
  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"
// 7 no. question answare
  function isArrayEmpty(arr) {
    return arr.length === 0;
  }
  
  console.log(isArrayEmpty([])); // true
  console.log(isArrayEmpty([1, 2, 3])); // false
 
  // 8 no. question answare
  function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorialize(num - 1);
  }
  
  console.log(factorialize(5)); // 120
  console.log(factorialize(7)); // 5040

   // 9 no. question answare

   function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("world")); // "dlrow"

    // 10 no. question answare
  
    function toLowerCase(str) {
        return str.toLowerCase();
      }
      
      console.log(toLowerCase("HELLO WORLD")); // "hello world"
      console.log(toLowerCase("JavaScript")); // "javascript"

         // 11 no. question answare
         function stringLength(str) {
            return str.length;
          }
          
          console.log(stringLength("hello")); // 5
          console.log(stringLength("world")); // 5
          
      // 12 no. question answare
          function mergeArrays(arr1, arr2) {
            return arr1.concat(arr2);
          }
          
          console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
          console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]

          // 13 no. question answare
          
          function getLastElement(arr) {
            return arr[arr.length - 1];
          }
          
          console.log(getLastElement([1, 2, 3])); // 3
          console.log(getLastElement(["a", "b", "c"])); // "c"
 // 14 no. question answare
          function getFirstCharacter(str) {
            return str[0];
          }
          
          console.log(getFirstCharacter("hello")); // "h"
          console.log(getFirstCharacter("world")); // "w"


 // 15 no. question answare
          function sumArray(arr) {
            let sum = 0;
            
            for (let i = 0; i < arr.length; i++) {
              sum += arr[i];
            }
            
            return sum;
          }
          
          console.log(sumArray([1, 2, 3, 4])); // 10
          console.log(sumArray([-1, -2, -3, -4])); // -10
          console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
          
          
  