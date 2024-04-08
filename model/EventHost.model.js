import { Schema, model } from "mongoose";

const EventHostSchema = new Schema({
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
    eventinfo: {
        EventName: String,
        EventType: String,
        EventDescription: String,
        PartnershipDetails: String,
        Dates: String
    }
});

const EventHost = model("EventHost",EventHostSchema);
export default EventHost;
