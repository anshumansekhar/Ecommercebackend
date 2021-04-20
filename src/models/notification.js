const mongoose = require("mongoose");

const notificationSchema=new mongoose.Schema({
    text:{
        type:String,
        required:true,
        trim:true
    },
    priority:{
        type:String,
        required:true,
        trim:true
    },
    to:{
        type:String,
        trim:true
    },
},
{ 
    timestamps: true 
}
);
module.exports = mongoose.model("Notification", notificationSchema);
