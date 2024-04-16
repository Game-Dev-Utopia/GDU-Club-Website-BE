import { model, Schema } from 'mongoose';

const heroSchema = new Schema({
    description:{
        type: String,
    },
    diamondTilesImgs:{
        type:[String],
    },
    bgVideo : {
        type:String,
    },
});

const Hero = model('Hero', heroSchema);

export default Hero;