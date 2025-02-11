const { sum, mean } = require("./math");

const Solution = () => {
  const nums = [1, 2, 3, 4, 5];

  // Calculate the sum and mean of the array
  const totalSum = sum(nums);
  const average = mean(nums);

  // Log the results
  console.log(`The sum is ${totalSum}`);
  console.log(`The mean is ${average}`);
};

Solution();
module.exports = Solution;
