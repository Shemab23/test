import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 3000;
const app = express();


app.use(cors());

app.get("/api/", (req, res) => {
  res.json({ msg: "backend am in !!!" });
});

app.listen(PORT, () => console.log(`Backend listening on port: ${PORT}`));
