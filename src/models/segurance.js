import mongoose from "mongoose";

const SeguranceSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    name:{
        type: String
    },
    description:{
        type: String
    },
    lastUpdate:{
        type: Date
    },
    files:{
        type: Object
    },
    observation:{
        type: String
    },
    questions:[
        {
            observation:{
                type: String
            },
            date:{
                type: String
            },
            lastUpdate:{
                type: String
            },
            description:{
                type: String
            },
            status:{
                type: String
            },
            author:{
                type: String
            }
        }
    ]

});

export default mongoose.model('segurance', SeguranceSchema);