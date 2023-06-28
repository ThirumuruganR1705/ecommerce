import mongoose, { model,models,Schema } from "mongoose";

const categorySchema= new Schema({
    categoryName:{type:String,required:true},
    parentCategory:{type:mongoose.Types.ObjectId,ref:"Category",required:true}
});

const Category = models.Category || model("Category",categorySchema);

export default Category;