const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

const projects = [
  {
    id: 1,
    title: "RAG AI System",
    description: "Built Retrieval Augmented Generation system using LangChain and vector DB.",
    tech: "Python, FAISS, OpenAI, FastAPI"
  },
  {
    id: 2,
    title: "AI Recruitment Platform",
    description: "AI-powered resume screening and semantic ranking system.",
    tech: "Node.js, Supabase, Embeddings"
  },
  {
    id: 3,
    title: "YOLO CCTV Detection",
    description: "Real-time people detection system using YOLOv8.",
    tech: "Python, OpenCV"
  },
  {
    id: 4,
    title: "Recommendation system",
    description: "Real-time people detection system using YOLOv8.",
    tech: "Python, OpenCV"
  }
];

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.get("/api/projects/:id", (req, res) => {
  const project = projects.find(p => p.id == req.params.id);
  res.json(project);
});



// POST route for contact form
app.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      html: `
        <h3>Contact Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({ success: true, message: "Message sent successfully!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send message" });
  }
});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});
