import { Schema, model } from "mongoose";

const QuerySchema = new Schema({
    info: {
        Name: String,
        Email: String,
        PhoneNo: String,
        QueryType: String,
        EmergencyType: String,
        Message: String
    }
});

const Query = model("Query", QuerySchema);
export default Query;
