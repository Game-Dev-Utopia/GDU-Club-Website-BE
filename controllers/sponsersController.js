import Sponsers from "../model/Sponsers.model.js";

export const addSponser = async (req, res) => {
    const sponser = req.body;
    const newSponser = new Sponsers(sponser);
    try {
        await newSponser.save();
        res.status(201).json(newSponser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getSponsers = async (req, res) => {
    try {
        const sponsers = await Sponsers.find();
        res.status(200).json(sponsers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateSponser = async (req, res) => {
    const { id } = req.body;
    const sponser = req.body;
    const sponserExist = await Sponsers.findById(id);
    if (!sponserExist) {
        return res.status(404).json({ message: "Sponser not found" });
    }
    const updatedSponser = await Sponsers.findByIdAndUpdate(id, { ...sponser, id }, { new: true });
    res.json(updatedSponser);
}

export const deleteSponser = async (req, res) => {
    const { id } = req.body;
    const sponserExist = await Sponsers.findById(id);
    if (!sponserExist) {
        return res.status(404).json({ message: "Sponser not found" });
    }
    await Sponsers.findByIdAndRemove(id);
    res.json({ message: "Sponser deleted successfully" });
}