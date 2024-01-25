import seguranceModel from "../../models/segurance.js";

export default class plateService {

    async create({date, name, description, lastUpdate, files, observation, questions}){
        try {
           var segurance = new seguranceModel({
            date, name, description, lastUpdate, files, observation, questions
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

           var newsegurance = await seguranceModel.findByIdAndUpdate(id, {$set: { ...data}},  { new: true});
           return { segurance: newsegurance }

        } catch (err) {
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