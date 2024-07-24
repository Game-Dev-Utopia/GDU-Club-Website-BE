import Event from "../model/Event.model.js";
import Logger from "../logger/Logger.js";

export const addEvent = async (req, res) => {
    try {
        const roles = req.roles;
        if (roles.lenght === 0 || !roles.includes('admin')) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const {
            eventName,
            eventDate,
            eventDesc,
            imageUrl,
            faq,
            videoUrl,
            starCount,
            prizes,
            registrationDeadline,
            startsIn,
            endsIn,
            individualOrganizers,
            organizers,
            rules,
            winners,
        } = req.body;

        const existingEventName = await Event.findOne({ eventName });

        if (existingEventName) {
            return res.status(400).json({ error: "Please use a unique event name" });
        }

        const newEvent = new Event({
            eventName,
            eventDate,
            eventDesc,
            imageUrl,
            faq,
            videoUrl,
            starCount,
            prizes,
            registrationDeadline,
            startsIn,
            endsIn,
            individualOrganizers,
            organizers,
            rules,
            winners,
        });

        const savedEvent = await newEvent.save();
        Logger(': Response 👍 :', 'Event added successfully', req.url, req.method);
        res.status(201).json({ msg: "Event added successfully", event: savedEvent });
    } catch (error) {
        Logger(': Request 🙏 :', `Error occurred while adding event: ${error.message}`, req.url, req.method);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}

export const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        Logger(': Response 👍 :', 'Events retrieved successfully', req.url, req.method);
        res.status(200).json({ events });
    } catch (error) {
        Logger(': Request 🙏 :', `Error occurred while fetching events: ${error.message}`, req.url, req.method);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

export const getEventById = async (req, res) => {
    try {
        const id = req.params.id;
        const event = await Event.findById(id);

        if (!event) {
            return res.status(404).json({ error: "Event not found" });
        }

        res.status(200).json(event);

        Logger(': Response 👍 :', 'Event details retrieved successfully', req.url, req.method);

    } catch (error) {
        Logger(': Request 🙏 :', `Error occurred while fetching event details: ${error.message}`, req.url, req.method);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

export const deleteEvent = async (req, res) => {
    try {
        const roles = req.roles;
        if (roles.lenght === 0 || !roles.includes('admin')) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const { eventId } = req.params;

        if (eventId) {
            Event.deleteOne({ _id: eventId }, function (err, data) {
                if (err) throw err;
                return res.status(201).send({ msg: "Record Deleted...!" });
            });
        } else {
            return res.status(401).send({ error: "Event Not Found...!" });
        }
    } catch (error) {
        return res.status(401).send({ error });
    }
}

export const updateEvent = async (req, res) => {
    try {
        const roles = req.roles;
        if (roles.lenght === 0 || !roles.includes('admin')) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const eventId = req.params.eventId;
        const updatedEventData = req.body;

        const updatedEvent = await Event.findByIdAndUpdate(eventId, updatedEventData, { new: true });

        if (!updatedEvent) {
            return res.status(404).json({ error: "Event not found" });
        }

        res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}