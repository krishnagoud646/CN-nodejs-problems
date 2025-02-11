const fs = require("fs");

const Solution = () => {
  // Append data asynchronously
  fs.appendFile("note.txt", "new data\n", (err) => {
    if (err) {
      return console.error("Error appending to file:", err);
    }

    console.log("File updated successfully!");

    // Read file after ensuring the append operation is complete
    fs.readFile("note.txt", "utf-8", (err, data) => {
      if (err) {
        return console.error("Error reading file:", err);
      }
      console.log("Updated file content:");
      console.log(data);
    });
  });
};

Solution();
module.exports = Solution;
