import { model,models,Schema } from "mongoose";

const productSchema= new Schema({
    productName:{type:String,required:true},
    category:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:String,required:true},
    Images:[{type:String,required:true}],
    features:{type:String,required:true}
});

const Products = models.Products || model("Products",productSchema);

export default Products;