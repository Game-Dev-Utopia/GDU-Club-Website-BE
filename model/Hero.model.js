import { model, Schema } from 'mongoose';

const heroSchema = new Schema({
    description: String,
    img1: String,
    img2: String,
    img3: String,
    video: String
});

const Hero = model('Hero', heroSchema);

export default Hero;