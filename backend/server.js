const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/auth"));
app.use("/api/jobs", require("./routes/jobs"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
}

app.listen(port, () => console.log(`Server Connected On Port ${port}`));
