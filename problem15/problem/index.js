import http from "http";
import fs from "fs";
import EventEmitter from "events";
import nodemailer from "nodemailer";

// Define the CustomEvent class
class CustomEvent extends EventEmitter {
  mailSent(email) {
    this.emit("mailSent", email);
  }
}

// Instantiate the custom event
const customEvent = new CustomEvent();

const server = http.createServer((req, res) => {
  // Set up the transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codingninjas2k16@gmail.com", // Replace with your email
      pass: "slwvvlczduktvhdj", // Use a secure way to store this, like environment variables
    },
  });

  if (req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", async () => {
      try {
        // Parse the incoming data
        const { name, email, message } = JSON.parse(data);

        const queryString = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;
        console.log(`User name: ${name}`);
        console.log(`Query: ${message}`);

        // Append user query in "queries.txt"
        try {
          fs.appendFileSync("queries.txt", queryString);
        } catch (err) {
          console.error("Error saving query:", err.message);
        }

        // Nodemailer mail options
        const mailOptions = {
          from: "codingninjas2k16@gmail.com",
          to: email,
          subject: "Query received",
          text: "We have received your query and will get back to you soon.",
        };

        // Use Nodemailer to send confirmation email
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(`Error: ${error.message}`);
          } else {
            console.log(`Email sent successfully to ${email}`);
            // Emit "mailSent" event
            customEvent.mailSent(email);
          }
        });

        // Respond to the client
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Query Saved and email sent!");
      } catch (err) {
        console.error("Error handling request:", err.message);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      }
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Coding Ninjas!");
  }
});

// Define the solution to add an event listener
const Solution = () => {
  customEvent.addListener("mailSent", (email) => {
    console.log("Custom event 'mailSent' emitted.");
    console.log(
      `Confirming that the email has been sent successfully to ${email}`
    );
  });
};

// Call the solution to set up the listener
Solution();

export default server;
export { server, CustomEvent, Solution };
