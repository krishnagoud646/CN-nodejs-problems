// Please don't change the pre-written code
// Import the necessary modules here
const fs = require("fs");

const Solution = () => {
  // Write your code here
  try {
    fs.writeFileSync("notes.txt", "The world has enough coders");
  } catch (err) {
    console.log(err);
  }
  const buffer = fs.readFileSync("notes.txt", { encoding: "utf-8" });
  console.log(buffer);
  fs.appendFileSync("notes.txt", " BE A CODING NINJA!");
  const buffer2 = fs.readFileSync("notes.txt", { encoding: "utf-8" });
  console.log(buffer2);
};
Solution();
module.exports = Solution;
