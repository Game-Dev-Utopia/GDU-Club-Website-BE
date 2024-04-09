import Form from "../model/Form.model.js";

export const getForm = async (req, res) => {
        try {
            const forms = await Form.find();
            res.status(200).json(forms);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error", details: error.message });
        }
    }

    export async function addFormResponse(req, res) {
    try {
        const {
            formName,
            response
        } = req.body;

        const newForm = new Form({
            formName, response
        });

        const savedForm = await newForm.save();

        res.status(201).json({ msg: "Form response added successfully", form: savedForm });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}


// Function to delete all form Proposals
export async function clearAllContact(req, res) {
    try {
        await Form.deleteMany(); // Delete all documents from BusinessProposal collection


        res.status(200).json({ message: "Successfully deleted all " });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}