// Please do not change the prewritten code
const axios = require("axios");

const Solution = async () => {
  try {
    // Fetch data from the API
    const response = await axios.get(
      "https://api.codingninjas.com/api/v3/event_tags"
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

Solution();
module.exports = Solution;
