import express from "express";
import cors from "cors";
import db from './db/connection.js'

const PORT = process.env.PORT || 3000;
const app = express();


app.use(cors());

app.get("/api/", (req, res) => {
  res.json({ msg: "backend am in !!!" });
});

app.get("/api/users", async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM user');
    if (rows.length > 0) {
      res.status(200).json(rows); // send array directly
    } else {
      res.status(200).json({ msg: "No users found" });
    }
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.listen(PORT, () => console.log(`Backend listening on port: http://localhost:${PORT}`));
