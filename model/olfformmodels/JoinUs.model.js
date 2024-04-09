import { Schema, model } from "mongoose";

const JoinUsSchema= new Schema({
    basicinfo: {
        Name: String,
        Email: String,
        Age: Number,
        Sex: String
    },
    careerinfo: {
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
