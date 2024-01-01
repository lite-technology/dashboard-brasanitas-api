import toolModel from "../../models/tool.js";

export default class toolService {

    async create({name, validateSize}){
        try {
           var tool = new toolModel({
                name,
                validateSize
           });

           await tool.save();

           return { tool }
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    async update({id, data}){
        try {   
           var  tool = await toolModel.findById(id);
           if (!tool ) return { error: "tool_not_found"};

           var newTool = await toolModel.findByIdAndUpdate(id, {$set: { ...data}},  { new: true});
           return { tool: newTool }

        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    async delete({id}){
        try {
            var  tool = await toolModel.findById(id);
            if (!tool ) return { error: "tool_not_found"};
 
             await toolModel.findByIdAndDelete(id);
            return {}
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

    async get({}){
        try {
           return await toolModel.find().sort({date: -1});
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

}