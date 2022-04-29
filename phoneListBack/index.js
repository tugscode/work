const dotenv = require('dotenv').config();
const express = require("express");
const apiRoutes = require("./routes/api.js");
const adminRoutes = require("./routes/admin.js")
const connection = require("./database.js");
const cors = require('cors')
const app = express();
const port = 3001;
var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
  };
app.use(express.json());
app.use(express.static("public"));

app.use("/api", cors(corsOptions),apiRoutes);
app.use("/admin", cors(corsOptions), adminRoutes)
app.all("*", (req, res, next) => {
    res.status(404).json({
        success: false,
        message: `Can't find ${req.originalUrl} on this server!`,
    });
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });