require('dotenv').config()
const express = require("express");
const PORT = process.env.PORT || 5000;

const app = express();
const userRoutes = require('./routes/users');
const middlewareLogsRequest = require('./middleware/logs');

// jalankan fungsi middleware
app.use(middlewareLogsRequest);

//allow req body with json
app.use(express.json());

// app.method(path, handler)
app.use("/users", userRoutes);

app.listen(PORT, () => {
    console.log(`server berhasil running di port ${PORT}`);
})
