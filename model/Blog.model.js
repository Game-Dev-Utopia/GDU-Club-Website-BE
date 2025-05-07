import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: String,
    cdnUrl: String,
    channelId: String,
    author: String,
    createdAt: Date,
});

const BlogModel = mongoose.model("Blog", BlogSchema);

export default BlogModel;