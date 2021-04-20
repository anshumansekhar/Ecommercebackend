const express = require('express');
const { requireSignin, adminMiddleware } = require('../../common-middleware');
const { initialData } = require('../../controller/admin/initialData');
const { deleteNotification, getAllNotifications } = require('../../controller/admin/notification');
const router = express.Router();


router.post('/initialdata', requireSignin, adminMiddleware, initialData);
router.get('/getAllNotifications',requireSignin,adminMiddleware,getAllNotifications);
router.post('/deleteNotification',requireSignin, adminMiddleware,deleteNotification);


module.exports = router;