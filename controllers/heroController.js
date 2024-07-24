import Hero from "../model/Hero.model.js";
/**
 * @type {import("express").RequestHandler}
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export const getHeroes = async (req, res) => {
    try {
        const heroes = await Hero.find();
        res.status(200).json(heroes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

/**
 * @type {import("express").RequestHandler}
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */

export const createHero = async (req, res) => {
    const hero = req.body;
    const newHero = new Hero(hero);
    try {
        const roles = req.roles;
        if (roles.lenght === 0 || !roles.includes('admin')) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        await newHero.save();
        res.status(201).json(newHero);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}