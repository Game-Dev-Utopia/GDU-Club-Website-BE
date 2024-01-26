import GameModel from "../model/Game.model.js";

export async function addGame(req, res) {
    try {
      const {
        title,
        description,
        features,
        trailer_video,
        game_image,
        thumbnails,
        achievements,
        system_requirements,
        download_url,
        play_url,
        tags,
        developers_id,
      } = req.body;
  
      const newGame = new GameModel({
        title,
        description,
        features,
        trailer_video,
        game_image,
        thumbnails,
        achievements: [{
          image: achievements.image,
          title: achievements.title,
          description: achievements.description,
        }],
        system_requirements,
        download_url,
        play_url,
        tags,
        developers_id,
      });
  
      const savedGame = await newGame.save();
  
      res.status(201).json({ msg: "Game added successfully", game: savedGame });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
  }