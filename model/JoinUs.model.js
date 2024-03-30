import { Schema, model } from "mongoose";

const JoinUsSchema= new Schema({
    info: {
        Name: String,
        Email: String,
        Age: Number,
        Sex: String
    },
    step2: {
        Qualification: String,
        Occupation: String
    },
    reasons: {
        WhyJoinUs: String,
        RolePreference: String
    }
});

const JoinUs = model("JoinUs", JoinUsSchema);
export default JoinUs;
