const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json({ extended: false }));

connectDB();

app.get("/", (req, res) => {
  res.send("API is running hell yeah");
});

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
