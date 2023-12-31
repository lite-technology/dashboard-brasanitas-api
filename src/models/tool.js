import mongoose from "mongoose";

const ToolSchema = mongoose.Schema({
    name: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    validate:{
        type: Number,
        default: 0
    },
    expired: {
        type: Boolean
    }

})