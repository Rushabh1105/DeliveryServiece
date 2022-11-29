const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");


const router = express.Router();

router.post("/signup", 
    passport.authenticate("signup", {session : false}),
     async (req, res, next) => {
        try {
                return res.json({
                    status : 200,
                    success : true,
                    message : "signup successful",
                    data : {
                        user : req.user,
                    }
                })
        } catch (err) {
                console.log(err);
                return res.json({
                    status : 500,
                    success : false,
                    message : "someting went wrong",
            })
        }
    }
);


router.post("/login", 
    async (req, res, next) => {
        passport.authenticate("login",
            async(err, user, info) => {
                try {
                    if(err || !user){
                        const error = new Error("Something went wrong");
                        return next(error)
                    }
                    req.login(
                        user,
                        {session : false},
                        async(done) => {
                            if(err){
                                return next(err);
                            }
                            const body = {_id : user._id, email : user.email};
                            const token = jwt.sign({user : body}, "TOP_SECRET");
                            return res.json ({
                                status : 200,
                                success : true,
                                message : "login successful",
                                data : token
                            });
                        }
                    )
                } catch (err) {
                    console.log(err);
                    return res.json({
                        status : 500,
                        success : false,
                        message : "someting went wrong",
                    })
                }
            }
        )(req, res, next)
    }
)

module.exports = router;