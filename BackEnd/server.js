import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors({ origin: "https://rahul-keshri-portfolio.netlify.app" })); // your frontend port
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { user_email, user_name, subject, message } = req.body;

  if (!user_email || !user_name || !subject || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  // Step 1: Create transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rahulprasadkeshri5@gmail.com", // <-- your Gmail
      pass: "gtvi paev lryv cpkn", // <-- your 16-char app password
    },
  });

  // Step 2: Create email content
  const mailOptions = {
    from: `"${user_name}" <${user_email}>`,
    to: "rahulprasadkeshri5@gmail.com", // <-- where you want to receive the message
    subject: `Portfolio Contact: ${subject}`,
    text: `
You have received a new message from your portfolio contact form:

👤 Name: ${user_name}
📧 Email: ${user_email}
📝 Subject: ${subject}
💬 Message: ${message}
`,
  };

  try {
    // Step 3: Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
