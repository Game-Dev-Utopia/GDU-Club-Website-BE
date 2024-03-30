import mongoose from "mongoose";


const memberSchema = new mongoose.Schema({
    memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    role: { type: String, required: true },
});

// Define the Event schema
const eventSchema = new mongoose.Schema({
    eventName: { type: String, required: true },
    eventDate: { type: Date, required: true },
    eventDescription: { type: String },
});

// Define the Games schema
const gamesSchema = new mongoose.Schema({
    gameId: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
    role: { type: String, required: true },
});

// Define the Contact Information schema
const contactInformationSchema = new mongoose.Schema({
    email: { type: String },
    phone: { type: String },
    socialMediaLinks: {
        linkedIn: { type: String },
        instagram: { type: String },
    },
});

// Define the Branch schema
const branchSchema = new mongoose.Schema({
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

// Create the Branch model
const Branch = mongoose.model('Branch', branchSchema);

export default Branch;
