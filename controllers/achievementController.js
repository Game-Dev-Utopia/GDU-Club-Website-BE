import express from 'express';
import { Achievement, Top3Achievements } from '../model/Achievement.model.js';

export const addAchievement = async (req, res) => {
    try {
        const roles = req.roles;
        if (roles.lenght === 0 || !roles.includes('admin')) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const { title, description, date, image, ranked, rank } = req.body;
        if (!title || !description || !date) {
            return res.status(400).json({ error: "Please provide correct details" })
        }

        const newAchievement = new Achievement({
            title,
            description,
            date,
            image,
            ranked, rank
        });

        const savedAchievement = await newAchievement.save();

        res.status(201).json({ msg: "Achievement added successfully", achievement: savedAchievement });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}

export const addAchievementToTop3 = async (req, res) => {
    try {
        const roles = req.roles;
        if (roles.lenght === 0 || !roles.includes('admin')) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const { title, description, date, image, ranked, rank } = req.body;
        if (!title || !description || !date) {
            return res.status(400).json({ error: "Please provide correct details" })
        }

        // Check if the achievement already exists
        let existingAchievement = await Achievement.findOne({ title });

        // If it doesn't exist, create a new achievement
        if (!existingAchievement) {
            const newAchievement = new Achievement({
                title,
                description,
                date,
                image,
                ranked,
                rank
            });

            const savedAchievement = await newAchievement.save();

            // Find or create the top 3 achievements document
            let top3Achievements = await Top3Achievements.findOne();
            if (!top3Achievements) {
                top3Achievements = new Top3Achievements();
            }

            // Add the new achievement to the top 3 achievements array
            top3Achievements.top3Achievements.push(savedAchievement);

            await top3Achievements.save();

            return res.status(201).json({ msg: "Achievement added successfully", achievement: savedAchievement });
        }

        // If it exists, update the existing achievement
        existingAchievement.description = description;
        existingAchievement.date = date;
        existingAchievement.image = image;
        existingAchievement.ranked = ranked;
        existingAchievement.rank = rank;

        const updatedAchievement = await existingAchievement.save();

        res.status(200).json({ msg: "Achievement updated successfully", achievement: updatedAchievement });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}


export const getAchievements = async (req, res) => {
    try {
        // Find all achievements
        const allAchievements = await Achievement.find();

        // Find top 3 achievements
        const top3Achievements = await Top3Achievements.findOne().populate('top3Achievements');

        // Construct response object with both arrays
        const responseObject = {
            top3Achievements: top3Achievements ? top3Achievements.top3Achievements : [],
            achievements: allAchievements
        };

        res.status(200).json(responseObject);
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
        const roles = req.roles;
        if (roles.lenght === 0 || !roles.includes('admin')) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const { id, title, description, date, image, ranked, rank } = req.body;

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
        const roles = req.roles;
        if (roles.lenght === 0 || !roles.includes('admin')) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const { id } = req.body;
        const deletedAchievement = await Achievement.findByIdAndDelete(id);
        res.status(200).json({ msg: "Achievement deleted successfully", achievement: deletedAchievement });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}



