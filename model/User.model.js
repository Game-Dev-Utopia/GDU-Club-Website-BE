import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide unique username"],
    unique: [true, "Username Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please provide a unique email"],
    unique: [true, "Email Exist"],
  },
  firstName: {
    type: String,
    unique: false,
  },
  lastName: {
    type: String,
    unique: false,
  },
});

export default mongoose.model.Users || mongoose.model("User", UserSchema);
