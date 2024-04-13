import mongoose, { Schema, model } from "mongoose";

const membersData = {
  name: {
    type: String,
    required: true
  },
  bodies: [{
    type: String,
    required: true
  }],
  responsibilities: [{
    type: String,
    required: true
  }],
  intro: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    minlength: 5,
    maxlength: 15,
    required: true,
  },
  profileImageURL: {
    type: String,
  },
  bgImageURL: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  github: {
    type: String
  },
  instagram: {
    type: String,
  }
};

const sectionData = {
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  data: [membersData]
};

const boardMembersSchema = Schema(sectionData);
const branchSchema = Schema(sectionData);
const topContributionsAndProjectsSchema = Schema(sectionData);
const OurTeamsSchema = Schema(sectionData);
const specialThanksSchema = Schema(sectionData);

const aboutUsSchema = new Schema({
  boardMembersData: [boardMembersSchema],
  branchesData: [branchSchema],
  ourTeamsData: [OurTeamsSchema],
  specialThanksData: [specialThanksSchema],
  topContributionsAndProjects: [topContributionsAndProjectsSchema],
});
// Check if the model already exists before defining it
const AboutUs = model('AboutUs', aboutUsSchema);

export default AboutUs;

