import plateModel from "../../models/plate.js";

export default class plateService {

    async create({name, validateSize, color, days}){
        try {
           var plate = new plateModel({
               validateSize,
               timeline:[],
               name
           });

           await plate.save();

           return { plate }
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    async update({id, data}){
        try {   
           var  plate = await plateModel.findById(id);
           if (!plate ) return { error: "plate_not_found"};

           var newplate = await plateModel.findByIdAndUpdate(id, {$set: { ...data}},  { new: true});
           return { plate: newplate }

        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    async delete({id}){
        try {
            var  plate = await plateModel.findById(id);
            if (!plate ) return { error: "plate_not_found"};
 
             await plateModel.findByIdAndDelete(id);
            return {}
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

    async get({}){
        try {
           return await plateModel.find().sort({date: -1});
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

}