import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
name :{
    type: String,
    required: true
},

productImage :{
    type: String,
}, 

price: {
    type: Number,
    default : 0
},
stock: {
    default:  0,
    type: Number
},
category: {
    type: mongoose.Schema.Types.ObjectID,
    ref: "Category",
    required: true
}, 
Owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "User"
}

}, {timestamps: true})

export const Product = mongoose.model("Product", productSchema)