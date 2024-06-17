require("dotenv").config();
const express = require("express");
const app = express();
const authRoute= require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

//middleware
app.use(express.json());

//Mount the Router: To use the router in your main Express appm you can "mount" it at a specific URL prefix
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);


app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => { 
app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
    });
});