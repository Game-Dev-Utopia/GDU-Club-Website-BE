import BusinessProposal from '../model/BusinessProposal.model.js'; 
import EventHost from '../model/EventHost.model.js'; 
import JoinUs from '../model/JoinUs.model.js';
import ProjectProposal from '../model/ProjectProposal.model.js';
import Query from '../model/Query.model.js';


export async function addBusinessProposal(req, res) {
    try {
        const {
            details,
            organisationinfo,
            businessidea
        } = req.body;

        const newForm = new BusinessProposal({
            details,
            organisationinfo,
            businessidea
        });

        const savedForm = await newForm.save();

        res.status(201).json({ msg: "BusinessProposal added successfully", form: savedForm });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}


export const getBusinessProposals = async (req, res) => {
    try {
        const businessProposals = await BusinessProposal.find();
        res.status(200).json(businessProposals);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}

// Function to add a new event host
export async function addEventHost(req, res) {
    try {
        const {
            basicInfo,
            organisationinfo,
            eventinfo
        } = req.body;

        const newEventHost = new EventHost({
            basicInfo,
            organisationinfo,
            eventinfo
        });

        const savedEventHost = await newEventHost.save();

        res.status(201).json({ msg: "Event host added successfully", eventHost: savedEventHost });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}

// Function to get all event hosts
export async function getEventHosts(req, res) {
    try {
        const eventHosts = await EventHost.find();
        res.status(200).json({ eventHosts });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}

// Function to add a new join us entry
export async function addJoinUs(req, res) {
    try {
        const {
            info,
            step2,
            reasons
        } = req.body;

        const newJoinUsEntry = new JoinUs({
            info,
            step2,
            reasons
        });

        const savedJoinUsEntry = await newJoinUsEntry.save();

        res.status(201).json({ msg: "Join us entry added successfully", joinUsEntry: savedJoinUsEntry });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}

// Function to get all join us entries
export async function getJoinUsEntries(req, res) {
    try {
        const joinUsEntries = await JoinUs.find();

        res.status(200).json({ joinUsEntries });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}


// Function to add a new project proposal
export async function addProjectProposal(req, res) {
    try {
        const {
            details,
            organisationinfo,
            projectdetails
        } = req.body;

        const newProjectProposal = new ProjectProposal({
            details,
            organisationinfo,
            projectdetails
        });

        const savedProjectProposal = await newProjectProposal.save();

        res.status(201).json({ msg: "Project proposal added successfully", projectProposal: savedProjectProposal });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}

// Function to get all project proposals
export async function getProjectProposals(req, res) {
    try {
        const projectProposals = await ProjectProposal.find();

        res.status(200).json({ projectProposals });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}

// Function to add a new query
export async function addQuery(req, res) {
    try {
        const {
            info
        } = req.body;

        const newQuery = new Query({
            info
        });

        const savedQuery = await newQuery.save();

        res.status(201).json({ msg: "Query added successfully", query: savedQuery });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}

// Function to get all queries
export async function getQueries(req, res) {
    try {
        const queries = await Query.find();

        res.status(200).json({ queries });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}

// Function to delete all Business Proposals
export async function clearAllContact(req, res) {
    try {
        await BusinessProposal.deleteMany(); // Delete all documents from BusinessProposal collection
        await EventHost.deleteMany();
        await Joinus.deleteMany();
        await ProjectProposal.deleteMany();
        await Query.deleteMany();

        res.status(200).json({ message: "Successfully deleted all " });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}
