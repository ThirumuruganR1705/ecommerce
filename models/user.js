import mongoose, { Schema,model,models } from "mongoose";
import Products from "./product";

const UserSchema = new Schema({
    username: { type: String ,required:true},
    email:{type:String ,required:true},
    password:{type:String ,required:true},
    liked:[{type:mongoose.Types.ObjectId,ref:"Products",required:true}],
    purchased:[{type:String,required:true}],
    cart:[{type:mongoose.Types.ObjectId,ref:"Products",required:true}]
});

export const User = models.User || model('User', UserSchema);