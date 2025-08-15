import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 3000;
const app = express();

const allowedOrigins = [
  "https://test-6jby.onrender.com", // production frontend
  "http://localhost:5173",           // dev frontend port
  "http://localhost:5174"            // add any other dev port you use
];

app.use(cors({
  origin: (origin, callback) => {
    // allow Postman or curl with no origin
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error("Not allowed by CORS"));
  }
}));

app.get("/", (req, res) => {
  res.json({ msg: "backend am in !!!" });
});

app.listen(PORT, () => console.log(`Backend listening on port: ${PORT}`));
