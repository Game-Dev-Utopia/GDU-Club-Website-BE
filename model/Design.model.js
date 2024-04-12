import { Schema, model } from "mongoose";

const designSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
    },
    designs: [],

    achievements: [{
        image: String,
        title: String,
        description: String
    }],
    download_url: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^https?:\/\/.+$/.test(value),
            message: "Invalid URL format for download URL",
        },
    },
    developer_ids: [{
        type: Schema.Types.ObjectId,
        ref:'Developer',
        required: true,
    }],
    likeCount:{
        type: Number
    },
    shareCount:{
        type: Number
    }
    
});

const Design = model("Design", designSchema);
export default Design;