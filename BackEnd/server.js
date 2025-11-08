import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

// Allow requests from your frontend
app.use(cors({ origin: "https://rahul-keshri-portfolio.netlify.app" }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post("/api/contact", async (req, res) => {
  const { user_email, user_name, subject, message } = req.body;

  // Validate form fields
  if (!user_email || !user_name || !subject || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    // Create Nodemailer transporter using SendGrid
    const transporter = nodemailer.createTransport({
      service: "SendGrid",
      auth: {
        user: "apikey", // fixed for SendGrid
        pass: process.env.SENDGRID_API_KEY, // From environment variable
      },
    });

    // Email content
    const mailOptions = {
      from: `"${user_name}" <${process.env.SENDGRID_FROM_EMAIL}>`, 
      to: process.env.SENDGRID_FROM_EMAIL, 
      subject: `Portfolio Contact: ${subject}`,
      text: `
You have received a new message from your portfolio contact form:

👤 Name: ${user_name}
📧 Email: ${user_email}
📝 Subject: ${subject}
💬 Message: ${message}
`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to send email" });
  }
});

// Start server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
