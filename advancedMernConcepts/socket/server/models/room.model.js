const mongoose = require('mongoose');

    const RoomSchema = new mongoose.Schema({
    
        title : {
            type: String, 
            required: true,
            trim: true
        },
    
    }, { timestamps: true })


module.exports = mongoose.model(`Room`, RoomSchema)
