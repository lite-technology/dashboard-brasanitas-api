import mongoose from "mongoose";

const LocalShema = mongoose.Schema({
    name:{
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model('local', LocalShema);
