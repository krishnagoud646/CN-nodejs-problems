// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from "nodemailer";
import readline from "readline";

const Solution = () => {
  // Write your code here
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codingninjas2k16@gmail.com",
      pass: "slwvvlczduktvhdj",
    },
  });

  //   3. Send the Email
  const interface1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  interface1.question("Please enter your email: ", (email) => {
    const mailOptions = {
      from: "codingninjas2k16@gmail.com",
      to: email,
      subject: "Coding Ninjas",
      text: "The world has enough coders; be a coding ninja!",
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(`Error: ${error.message}`);
      } else {
        console.log(`success: Email sent to ${email}`);
      }
      interface1.close();
    });
  });
};

export default Solution;
