import usersModel from "../../models/user.js";

export default class usersService {

    async create({name, local, date, validateSize}){
        try {
           var users = new usersModel({
                date: date ? date : Date.now(),
                validateSize: validateSize ? Number(validateSize) : 0,
                local,
                name,
           });

           await users.save();

           return { users }
        } catch (err) {
            console.log(err)
            return { error: "internal_error" } ;
        }
    }
    async update({id, data}){
        try {   
           var  users = await usersModel.findById(id);
           if (!users ) return { error: "users_not_found"};

           var newusers = await usersModel.findByIdAndUpdate(id, {$set: { ...data}},  { new: true});
           return { users: newusers }

        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    async delete({id}){
        try {
            var  users = await usersModel.findById(id);
            if (!users ) return { error: "users_not_found"};
 
             await usersModel.findByIdAndDelete(id);
            return {}
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

    async get({}){
        try {
           return await usersModel.find().sort({date: -1});
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

}