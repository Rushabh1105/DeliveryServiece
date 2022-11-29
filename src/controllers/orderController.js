const orderServiece = require("../servieces/orderServieces");

const createOrder = async (req, res) => {
    try {
        const response = await orderServiece.createOrder(req.body);
        return res.json({
            status : 200,
            success : true,
            message : "created the order",
            data : response,
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "something went wrong",
        });
    }
}

const updateOrder = async (req, res) => {
    try {
        //console.log(req.params.id);
        const response = await orderServiece.updateOrder(req.params.id, req.body);
        return res.json({
            status : 200,
            success : true,
            message : "updated the order",
            data : response,
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "something went wrong",
        });
    }
}

const deleteOrder = async (req, res) => {
    try {
        const response = await orderServiece.deleteOrder(req.params.id);
        return res.json({
            status : 200,
            success : true,
            message : "deleted the order",
            data : response,
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "something went wrong",
        });
    }
}

const getOrder = async (req, res) => {
    try {
        const response = await orderServiece.getOrder(req.params.id);
        return res.json({
            status : 200,
            success : true,
            message : "created the order",
            data : response,
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "something went wrong",
        });
    }
}

const getAllOrder = async (req, res) => {
    try {
        const response = await orderServiece.getAllOrder();
        return res.json({
            status : 200,
            success : true,
            message : "created the order",
            data : response,
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "something went wrong",
        });
    }
}

module.exports = {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrder,
    getAllOrder
}