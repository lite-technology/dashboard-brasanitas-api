import seguranceModel from "../../models/segurance.js";

export default class plateService {

    async create({name, description, files, observation, questions, status}){
        try {
           var segurance = new seguranceModel({
            name, description, lastUpdate: Date.now(), files, observation, questions, status, 
           });

           await segurance.save();

           return { segurance }
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    async update({id, data}){
        try {   
           var  segurance = await seguranceModel.findById(id);
           if (!segurance ) return { error: "segurance_not_found"};

           var newsegurance = await seguranceModel.findByIdAndUpdate(id, {$set: { ...data,  lastUpdate: Date.now()}},  { new: true});
           return { segurance: newsegurance }

        } catch (err) {
            console.log(err)
            return { error: "internal_error" } ;
        }
    }
    async delete({id}){
        try {
            var plate = await seguranceModel.findById(id);
            if (!plate ) return { error: "segurance_not_found"};
 
             await seguranceModel.findByIdAndDelete(id);
            return {}
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

    async get({}){
        try {
           return await seguranceModel.find().sort({date: -1});
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

}