// External imports
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const cors = require("cors");
const path = require("path");
const app = express();
const connectDB = require("./config/db");
const http = require('http');


const { Server } = require('socket.io')



// raw server with express
const server = http.createServer(app);

// connect raw server with socket io server
const io = new Server (server)






// Mongodb connection
connectDB();











// Server listening
const port = process.env.PORT;
server.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`.bgGreen.black);
});
