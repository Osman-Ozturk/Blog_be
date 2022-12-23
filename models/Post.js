import { Schema , model } from "mongoose";

const PostSchema = new Schema({
        title:{
                type:String,
                required:true
        },
        subtitle:String,
        content:String,
        tag:String,
        image:String,
        creadAt:{type:Date , default:new Date},
        
})

const Post = model("Posts",PostSchema)

export default Post;