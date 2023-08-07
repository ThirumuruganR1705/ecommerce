import { model,models,Schema } from "mongoose";

const categorySchema= new Schema({
    categoryName:{type:String,required:true},
    parentCategory:{type:String,required:true},
    image:{type:String,required:true}
});

const Category = models.Category || model("Category",categorySchema);

export default Category;