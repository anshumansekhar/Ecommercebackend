const Notification = require("../../models/notification");
const Product = require("../../models/product");

exports.addNotification = (req, res, next) => {
    req.body.items.map((product) => {
        Product.findById(product.productId, function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {
                console.log(docs.quantity);
                if (docs.quantity < 40) {
                    const notification = new Notification({
                        text: `${docs.name} running low`,
                        priority: "High",
                        to: "Stock Manager"
                    })
                    notification.save((error, notification) => {
                        if (error) return res.status(400).json({ error });
                        if (product) {
                            console.log(notification);
                        }
                    });
                }
            }
        })
    })
    next();
};
exports.getAllNotifications = (req, res) => {
    Notification.find({}).exec((error, notifications) => {
        if (error) return res.status(400).json({ error });
        if (notifications) {
            res.status(200).json({ notifications });
        }
    });
}
exports.deleteNotification = (req, res) => {
    console.log(req.body.data);
    const notificationId= req.body.data;
    if (notificationId) {
        Notification.deleteOne({ _id: notificationId }).exec((error, result) => {
            if (error){
                console.log(error);
                return res.status(400).json({ error });
            }
            if (result) {
                console.log(result);
                res.status(200).json({ result });
            }
        });
    } else {
        res.status(400).json({ error: "Params required" });
    }
}