import mongoose from "mongoose";

const { Schema } = mongoose;

const timelineEventSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please provide title"],
  },
  details: {
    type: Array,
    required: [true, "Please provide description"],
  },
  date: {
    type: Date,
    required: [true, "Please provide date"],
  },
  altName: {
    type: String,
    required: [true, "Please provide category"],
  },
  image: {
    type: String,
    validate: {
      validator: (value) => {
        return /^https?:\/\/.+$/.test(value);
      },
      message: "Invalid URL format for the link",
    },
  },
});

const TimelineEvent = mongoose.model("TimelineEvent", timelineEventSchema);

export default TimelineEvent;
