import { Schema,model,models } from "mongoose";

const UserSchema = new Schema({
    username: { type: String ,required:true},
    email:{type:String ,required:true},
    password:{type:String ,required:true},
    liked:[{type:String,required:true}],
    purchased:[{type:String,required:true}],
    cart:[{type:String,required:true}]
});

export const User = models.User || model('User', UserSchema);