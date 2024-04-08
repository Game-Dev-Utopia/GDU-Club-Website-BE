import { Schema, model } from "mongoose";

const BusinessProposalSchema = new Schema({
    basicinfo: {
        Name: String,
        Email: String,
        PhoneNo: String
    },
    organisationinfo: {
        OrgName: String,
        Industry: String,
        LinkedInUrl: String,
        Description: String
    },
    businessidea: {
        BusinessIdea: String,
        Problem: String,
        Solution: String,
        Budget: String,
        TeamSize: Number
    }

});

const BusinessProposal = model("BusinessProposal" , BusinessProposalSchema);
export default BusinessProposal;