const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");

const {connect} = require("./src/configs/database");
const User = require("./src/models/user");
const apiRouter = require("./src/routes/routes");
require("./src/utils/auth");
const authRouter = require("./src/routes/authRoutes");

const app = express();

app.use(bodyParser.urlencoded({extended : false}) );
app.use("/", authRouter);
app.use("/api", passport.authenticate("jwt", {session : false}),apiRouter);




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