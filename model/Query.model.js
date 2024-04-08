import { Schema, model } from "mongoose";

const QuerySchema = new Schema({
    basicinfo: {
        Name: String,
        Email: String,
        PhoneNo: String,
    },
    query:{
        QueryType: String,
        EmergencyType: String,
        Message: String
    }
});

const Query = model("Query", QuerySchema);
export default Query;
