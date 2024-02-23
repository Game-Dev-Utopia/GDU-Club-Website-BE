import mongoose from "mongoose";

const headCouncilSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  position: {
    type: String,
    required: [true, "Position is required"],
  },
  image: {
    type: String,
    required: [true, "Image URL is required"],
  },
  backgroundImage: String, 
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  phone: {
    type: String,
    validate: {
      validator: (value) => {
        return /^[\d-]+$/.test(value);
      },
      message: "Invalid phone number format",
    },
  },
  social_media: {
    linkedin: String,
    instagram: String,
  },
});

const HeadCouncil = mongoose.model("HeadCouncil", headCouncilSchema);

export default HeadCouncil;
