import { Schema, model } from "mongoose";


const memberSchema = new Schema({
    memberId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    role: { type: String, required: true },
});

const eventSchema = new Schema({
    eventName: { type: String, required: true },
    eventDate: { type: Date, required: true },
    eventDescription: { type: String },
});

const gamesSchema = new Schema({
    gameId: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
    role: { type: String, required: true },
});

const contactInformationSchema = new Schema({
    email: { type: String },
    phone: { type: String },
    socialMediaLinks: {
        linkedIn: { type: String },
        instagram: { type: String },
    },
});

const branchSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    backgroundImage: { type: String },
    establishedYear: { type: Number },
    collegeAffiliation: { type: String },
    location: { type: String },
    contactInformation: contactInformationSchema,
    events: [eventSchema],
    members: [memberSchema],
    games: [gamesSchema],
});

// Check if the model already exists before defining it
const Branch = model('Branch') || model('Branch', branchSchema);

export default Branch;
