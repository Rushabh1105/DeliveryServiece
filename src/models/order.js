const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    trackingId : {
        type : Number,
        required : true,
        unique : true
    },
    currentLocation : {
        type : String,
    },
    currentStatus : {
        type : String,
        required : true,
        default : "at pickup",
        enum : ["at pickup","in transport", "in packaging","delivered","returned","lost"]
    },
    deliveryAddress : {
        type : String,
        required : true,
    },
    pickupAddress : {   
        type : String,
        required : true
    }   
}, {timestamps : true});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;