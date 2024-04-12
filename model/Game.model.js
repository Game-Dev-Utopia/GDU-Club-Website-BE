import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 100,
    unique: [true, "Title Exist"],
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 100000,
    unique: [true, "Description Exist"],
  },
  media: [
    {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (value) => {
          return /^https?:\/\/.+$/.test(value);
        },
        message: "Invalid URL format for game image",
      },
    }
  ],
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^https?:\/\/.+$/.test(value),
      message: "Invalid URL format for thumbnail",
    },
  },
  achievements: [{
    image: String,
    title: String,
    description: String
  }],
  system_requirements: [
    {
      property: {
        type: String,
      },
      requirement: {
        type: String,
      }
    }
  ],
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
  developer_ids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Developer',
      required: true,
    }
  ],
  categories: {
    type: [String],
    required: true,
  },
  downloadable: {
    type: Boolean,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  dimension: {
    type: String,
    required: true
  },
  device: {
    type: [String],
    required: true
  }
});

const Game = mongoose.model("Game", gameSchema);

export default Game;
