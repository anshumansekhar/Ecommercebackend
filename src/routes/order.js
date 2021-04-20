const { requireSignin, userMiddleware } = require("../common-middleware");
const { addNotification } = require("../controller/admin/notification");
const { addOrder, getOrders, getOrder, createOrder } = require("../controller/order");
const { decreaseProduct } = require("../controller/product");



const router = require("express").Router();
router.post("/createOrder", requireSignin, userMiddleware, createOrder);
router.post("/addOrder", requireSignin, userMiddleware,decreaseProduct,addNotification,addOrder);
router.get("/getOrders", requireSignin, userMiddleware, getOrders);
router.post("/getOrder", requireSignin, userMiddleware, getOrder);

module.exports = router;
