import mongoose from "mongoose";

const ToolSchema = mongoose.Schema({
    name: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    validateSize:{
        type: Number,
        default: 0
    },
    expired: {
        type: Boolean,
        default: false
    }

});

export default mongoose.model('tool', ToolSchema)