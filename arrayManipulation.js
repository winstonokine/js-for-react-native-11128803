//task 1
function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num; 
        } else {
            return num * 3; 
        }
    });
}

const inputArray = [1, 2, 3, 4, 5];
const processedArray = processArray(inputArray);
console.log(processedArray); // Output: [3, 4, 9, 16, 15]
