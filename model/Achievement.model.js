import mongoose, { Schema, model } from "mongoose";
const achievementsSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please provide title"],
    },
    description: {
        type: String,
        required: [true, "Please provide description"],
    },
    date: {
        type: Date,
        required: [true, "Please provide date"],
    },
    image: {
        type: String,
        trim: true,
        validate: {
            validator: (value) => {
                return /^https?:\/\/.+$/.test(value);
            },
            message: "Invalid URL format for image",
        },
    },
})

const Achievement = model("Achievement", achievementsSchema);
export default Achievement;