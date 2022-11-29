const Order = require("../models/order");

const createOrder = async (data) => {
    try {
        const newOrder = {
            trackingId : data.trackingId,
            currentLocation : data.currentLocation,
            currentStatus : data.currentStatus,
            deliveryAddress : data.deliveryAddress,
            pickupAddress : data.pickupAddress
        };

        const response = await new Order(newOrder).save();
        return response;
    } catch (err) {
        console.log(err);
    }
}

const updateOrder = async (id, data) => {
    try {
        console.log(data);
        const response = await Order.findByIdAndUpdate(id, data);
        return response;
        
    } catch (err) {
        console.log(err);
    }
}

const deleteOrder = async (id) => {
    try {
        const response = await Order.findByIdAndDelete(id);
        return response;
    } catch (err) {
        console.log(err);
    }
}

const getOrder = async (id) => {
    try {
        const response = await Order.findById(id);
        return response;
    } catch (err) {
        console.log(err);
    }
}

const getAllOrder = async () => {
    try {
        const response = await Order.find();
        return response;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrder,
    getAllOrder
}