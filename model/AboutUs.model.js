import mongoose from 'mongoose';

const { Schema } = mongoose;

const contactInfoSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const socialMediaLinksSchema = new Schema({
  linkedIn: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: true,
  },
});

const eventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  eventDescription: {
    type: String,
    required: true,
  },
});

const memberSchema = new Schema({
  memberId: {
    type: Schema.Types.ObjectId, // Reference to members associated with the branch
    ref: 'Member', // Assuming you have a 'Member' model
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

const gameAssociationSchema = new Schema({
  gameId: {
    type: Schema.Types.ObjectId, // Reference to games organized or endorsed by the branch
    ref: 'Game', // Assuming you have a 'Game' model
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});


const futurePlanSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});


const branchSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  backgroundImage: {
    type: String,
    required: true,
  },
  establishedYear: {
    type: Number,
    required: true,
  },
  collegeAffiliation: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contactInformation: contactInfoSchema,
  socialMediaLinks: socialMediaLinksSchema,
  events: [eventSchema],
  members: [memberSchema],
  associations: {
    games: [gameAssociationSchema],
  },
  futurePlans: [futurePlanSchema], 

});


const BranchModel = mongoose.model('Branch', branchSchema);

export default BranchModel;
