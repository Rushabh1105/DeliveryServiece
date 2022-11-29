const express = require("express");

const {connect} = require("./src/configs/database");
const User = require("./src/models/user");
const apiRouter = require("./src/routes/routes");


const app = express();



app.use("/api",apiRouter)




app.listen(4000, async () => {
    await connect();
    console.log("mongodb connected successfully...");
    console.log("server started successfully...");

    /* const user = await User.create({
        email : "ab@c.com",
        password : "12345",
    })

    console.log(user); */
})