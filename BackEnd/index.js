import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());

// POST route to handle form submission
app.post("/send", async (req, res) => {
  const { user_email, user_name, subject, message } = req.body;

  if (!user_email || !user_name || !subject || !message) {
    return res.status(400).json({ success: false, message: "All fields required" });
  }

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can also use outlook, yahoo etc.
      auth: {
        user: "rahulprasadkeshri5@gmail.com", // <-- Replace with your Gmail
        pass: "hovf kpib yadt qywh",   // <-- Use App Password (not normal password)
      },
    });

    // Email content
    const mailOptions = {
      from: user_email,
      to: "rahulprasadkeshri5@gmail.com", // where you’ll receive messages
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${user_name}\nEmail: ${user_email}\n\nMessage:\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
