import mongoose, { Schema, model } from "mongoose";

const achievementsSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please provide title"],
    },
    description: [String],
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
    ranked : {
        type: Boolean,
        required: true
    },
    rank:{
        type:Number
    }
});

const Achievement = model("Achievement", achievementsSchema);

const top3AchievementsSchema = new Schema({
    top3Achievements: {
        type: [achievementsSchema], // Array of achievements using the same schema as defined above
        validate: [arrayLimit, '{PATH} exceeds the limit of 3'] // Validate maximum of 3 achievements
    }
});

function arrayLimit(val) {
    return val.length <= 3;
}

const Top3Achievements = model("Top3Achievements", top3AchievementsSchema);

export { Achievement, Top3Achievements };
