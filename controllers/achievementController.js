import express from 'express';
import Achievement from '../model/Achievement.model.js';

export const addAchievement = async (req, res) => {
    try {
        const { title, description, date, image } = req.body;
        if (!title || !description || !date) {
            return res.status(400).json({ error: "Please provide correct details" })
        }

        const newAchievement = new Achievement({
            title,
            description,
            date,
            image,
        });

        const savedAchievement = await newAchievement.save();

        res.status(201).json({ msg: "Achievement added successfully", achievement: savedAchievement });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}

export const getAchievements = async (req, res) => {
    try {
        const achievements = await Achievement.find();
        res.status(200).json(achievements);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}

// export const getAchievement = async (req, res) => {
//     try {
//         const achievement = await Achievement.findById(req.params.id);
//         res.status(200).json(achievement);
//     } catch (error) {
//         res.status(500).json({ error: "Internal Server Error", details: error.message });
//     }
// }

export const updateAchievement = async (req, res) => {
    try {
        const { id, title, description, date, image } = req.body;

        const updatedAchievement = await Achievement.findByIdAndUpdate(id, {
            title,
            description,
            date,
            image,
        }, { new: true });

        res.status(200).json({ msg: "Achievement updated successfully", achievement: updatedAchievement });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}

export const deleteAchievement = async (req, res) => {
    try {
        const { id } = req.body;
        const deletedAchievement = await Achievement.findByIdAndDelete(id);
        res.status(200).json({ msg: "Achievement deleted successfully", achievement: deletedAchievement });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}



