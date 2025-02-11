// Import required module
const readline = require("readline");

const Solution = () => {
  // Write your code here
  const qInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  qInterface.question("Enter the First number: ", (input1) => {
    const num1 = Number(input1);
    qInterface.question("Enter the Second Number: ", (input2) => {
      const num2 = Number(input2);
      const max = Math.max(num1, num2);
      console.log(`The maximum of the two numbers is: ${max}`)
    });
  });
};

Solution();
module.exports = Solution;
