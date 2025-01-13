import express from 'express';
import router from './routes/router.js';
import dotenv from 'dotenv';

//creates a new web server object
const app = express();

//read in our configuration
dotenv.config({
    path: "./config.env"
})

//mount the router
app.use("/home", router);

//bind to a port
const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));