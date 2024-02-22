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
    features: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
    },
    design: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: (value) => {
                return /^https?:\/\/.+$/.test(value);
            },
            message: "Invalid URL format for game image",
        },
    },
    thumbnails: {
        type: [String],
        required: true,
        validate: {
            validator: (value) => value.every((url) => /^https?:\/\/.+$/.test(url)),
            message: "Invalid URL format for thumbnails",
        },
    },
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
    play_url: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^https?:\/\/.+$/.test(value),
            message: "Invalid URL format for play URL",
        },
    },
    tags: {
        type: [String],
        required: true,
    },
    developers_id: {
        type: Schema.Types.ObjectId,
        required: true,
    }
});

const Design = model("Design", designSchema);
export default Design;