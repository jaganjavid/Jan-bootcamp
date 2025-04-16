import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:String,
    description:String,
    image:String,
    author:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
}, {
    timestamps:true
})

export default mongoose.model("Blog", blogSchema);