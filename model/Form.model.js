import { Schema, model } from "mongoose";

// Define a schema for form responses
const FormResponseSchema = new Schema({
    formName: {
        type: String,
        required: true
    },
    response: {
        type: Object, // Using a Mixed type for flexibility
        required: true
    }
});


const Form = model('Form', FormResponseSchema);

export default Form;

