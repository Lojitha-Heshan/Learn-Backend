import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        productid : {
            type : String,
            unique : true,
            required : true
        },
        name : {
            type : String,
            required : true
        },
        altName : {
            type : [String],
            default : [],
            required : true
        },
        description : {
            type : String,
            required : true
        },
        price : {
            type : Number,
            required : true
        },
        labeleprice : {
            type : Number,
            required : true
        },
        Images : {
            type : [String],
            default : [],
            required : true
        },
        isAvailable : {
            type : Boolean,
            default : true,
        },
        category : {
            type : String,
            required : false
        },
        stock : {
            type : Number,
            required : true
        }

}
)
const Product = mongoose.model("Product", productSchema);

export default Product; 