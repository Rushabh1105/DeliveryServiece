const express = require("express");

const router = express.Router();

router.get("/help", (req, res) => {
    return res.json({
        status : 200,
        success : true,
        message : "hitting help API",
        data : {
            contact_us : "+91XXXXXXXXXX",
            email_us : "a@b.com"
        }
    })
})

module.exports = router;