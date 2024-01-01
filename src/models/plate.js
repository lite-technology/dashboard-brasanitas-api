import mongoose from "mongoose";    

const PlateSchema = mongoose.Schema({
    name: {
        type: String
    },
    validateSize: {
        type: Number,
        default: 0
    },
    expired:{
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now()
    },
    timeline:[
        {
            name: {
                type: String
            },
            validate: {
                type: Number,
                default: 0
            },
            expired:{
                type: Boolean,
                default: false
            },
            date: {
                type: Date,
                default: Date.now()
            },
            description: {
                type: String
            }
        }
    ]
});

export default mongoose.model('plate', PlateSchema);