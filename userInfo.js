const { processedArray } = require('./arrayManipulation.js'); 
// userInfo.js

function processArray(arr) {
    return arr.map(num => {
      if (num % 2 === 0) {
        return num * num;
      } else {
        return num * 3;
      }
    });
  }
  
  function formatArrayStrings(stringArr, numArr) {
    return stringArr.map((str, index) => {
      if (numArr[index] % 2 === 0) {
        return str.toUpperCase();
      } else {
        return str.toLowerCase();
      }
    });
  }
  
  function createUserProfiles(names, modifiedNames) {
    let id = 1;
    return names.map((originalName, index) => {
      return {
        originalName,
        modifiedName: modifiedNames[index],
        id: id++
      };
    });
  }
  
  // Example usage:
  let names = ['Winston', 'Naa', 'Emmanuel', 'Lewis'];
  let numbers = [1, 2, 3, 4];
  let processedNumbers = processArray(numbers);
  let formattedStrings = formatArrayStrings(names, processedNumbers);
  console.log(formattedStrings); // Output: ["WINSTON", "NAA", "EMMANUEL", "LEWIS"]
  