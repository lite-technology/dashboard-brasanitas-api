import mongoose from "mongoose";

const SeguranceSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    name:{
        type:{
            type: String
        },
    },
    description:{
        type: string
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
                type: Number
            },
            author:{
                name:{
                    type: String
                },
                id:{
                    type: String
                },
            }
        }
    ]

});

export default mongoose.model('segurance', SeguranceSchema);