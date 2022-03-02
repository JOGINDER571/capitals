const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/config");

dotenv.config();

// Connecting to mongodb server
connectDB();

// express application
const app = express();

// allow CORS
app.use(cors());

// Body Parser middleware, no need to install body-parser package
app.use(express.json());

const PORT = process.env.PORT || 8080;

// Routes
const userRoutes = require("./routes/userRoutes");
const pitchRoutes = require("./routes/internshipRoutes");
const applicationRoutes = require("./routes/applicationRoutes");

app.use("/user", userRoutes);
app.use("/pitch", pitchRoutes);
app.use("/application", applicationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


