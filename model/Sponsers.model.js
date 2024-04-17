import { Schema, model } from "mongoose";

const SponsersSchema = new Schema({
    name: {
        type: String,
    },
    owner:{
        type:String
    },
    email: {
        type: String

    },
    phone: {
        type: String

    },
    description: {
        type: String
    },
    logo: {
        type: String

    },
    link: {
        type: String

    },
    type: {
        type: String
    },
    endDate: {
        type: Date

    }
},
    {
        timestamps: true
    }
)

const Sponsers = model('Sponsers', SponsersSchema);
export default Sponsers;