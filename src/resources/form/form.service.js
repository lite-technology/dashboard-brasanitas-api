import formModel from "../../models/form.js";

export default class formService {

    async create({date, user, shift, tool, plate, actions,forActions,water}){
        try {
           var form = new formModel({
            date: date ? new Date(date) : Date.now(), 
            fill: Date.now(),
            user, 
            shift, 
            tool,
            plate, 
            actions,
            forActions,
            water
           });

           await form.save();

           return { form }
        } catch (err) {
            console.log(err)
            return { error: "internal_error" } ;
        }
    }
    async update({id, data}){
        try {   
           var  form = await formModel.findById(id);
           if (!form ) return { error: "form_not_found"};

           var newform = await formModel.findByIdAndUpdate(id, {$set: { ...data}},  { new: true});
           return { form: newform }

        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    async delete({id}){
        try {
            var  form = await formModel.findById(id);
            if (!form ) return { error: "form_not_found"};
 
             await formModel.findByIdAndDelete(id);
            return {}
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

    async get({}){
        try {
           return await formModel.find().sort({date: -1});
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

}