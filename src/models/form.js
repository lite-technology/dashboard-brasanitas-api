import mongoose from "mongoose";

const FormShema = mongoose.Schema({
    date:{
        type: Date
    },
    fill:{
        type: Date
    },
    user:{
        type: String
    },
    shift:{
        type: String
    },
    local:{
        type: String
    },
    tool:{
        type: Object
    },
    plate:{
        type: Object
    },
    actions:{
        type: Object
    },
    forActions:{
        type: Object
    },
    water:{
        type: Object
    }
});

export default mongoose.model('form', FormShema);
