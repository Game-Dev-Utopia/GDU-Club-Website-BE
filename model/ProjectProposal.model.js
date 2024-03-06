import { Schema, model } from "mongoose";

const ProjectProposalSchema = new Schema({
    details: {
        Name: String,
        Email: String,
        PhoneNo: String
    },
    organisationinfo: {
        OrgName: String,
        ProjectIdea: String
    },
    projectdetails: {
        Idea: String,
        ExpectedBudget: String,
        TeamSize: Number,
        ProjectDuration: String
    }
});

const ProjectProposal = model("ProjectProposal", ProjectProposalSchema);
export default ProjectProposal;
