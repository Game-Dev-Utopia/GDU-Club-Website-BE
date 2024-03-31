import { Schema, model } from "mongoose";

const SponsersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    type: {
        type: String,
    },
    endDate: {
        type: Date,
        required: true
    }
},
    {
        timestamps: true
    }
)

const Sponsers = model('Sponsers', SponsersSchema);
export default Sponsers;