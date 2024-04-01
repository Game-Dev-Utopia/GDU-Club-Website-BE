import { Schema, model } from "mongoose";

const developerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    profilePhoto: {
        type: String // Assuming you'll store the URL of the photo
    },
    headline: {
        type: String
    },
    socialMediaHandles: {
        linkedIn: {
            type: String
        },
        GitHub: {
            type: String
        },
        Instagram: {
            type: String
        },
        Itch: {
            type: String
        },
        Steam: {
            type: String
        },
        Discord: {
            type: String
        }
    }
});

const Developer =model('Developer', developerSchema);

export default Developer;
