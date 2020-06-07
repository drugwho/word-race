const express = require("express");

const connectDB = require("./config/db");

var cors = require("cors");

const app = express();

app.use(cors());

connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API RUNNING"));

app.use("/api/scores", require("./routes/api/scores"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT} .....`));
