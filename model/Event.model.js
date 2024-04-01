import { Schema, model } from "mongoose";

const eventSchema = new Schema({
    eventName: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    eventDesc: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    faq: [{
        Q: {
            type: String,
            required: true
        },
        A: {
            type: String,
            required: true
        }
    }],
    videoUrl: {
        type: String
    },
    starCount: {
        type: Number,
        min: 0,
        max: 5
    },
    prizes: [{
        PrizeName: {
            type: String,
            required: true
        },
        Prize: {
            type: String,
            required: true
        }
    }],
    registrationDeadline: {
        type: Date,
        required: true
    },
    startsIn: {
        type: Date,
        required: true
    },
    endsIn: {
        type: Date,
        required: true
    },
    individualOrganizers: {
        type: Boolean,
        default: false
    },
    organizers: [{
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }],
    rules: [{
        type: String,
        required: true
    }],
    winners: [{
        isTeam: {
            type: Boolean,
            required: true
        },
        name: {
            type: String
        },
        image: {
            type: String
        },
        teamName: {
            type: String
        },
        leader: {
            name: {
                type: String
            },
            image: {
                type: String
            }
        },
        teamMembers: [{
            name: {
                type: String
            },
            image: {
                type: String
            }
        }]
    }]
});

const Event = model('Event', eventSchema);

export default Event;
