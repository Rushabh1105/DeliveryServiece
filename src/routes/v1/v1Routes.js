const express = require("express");

const orderController = require("../../controllers/orderController");

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

router.post("/order", orderController.createOrder);
router.patch("/order/:id", orderController.updateOrder);
router.delete("/order/:id", orderController.deleteOrder);
router.get("/order/:id", orderController.getOrder);
router.get("/order", orderController.getAllOrder);

module.exports = router;