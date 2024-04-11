import Branch from "../model/Branch.model.js";

export async function addBranch(req, res) {
    try {
        const {
            name,
            description,
            image,
            backgroundImage,
            establishedYear,
            collegeAffiliation,
            location,
            contactInformation,
            events,
            members,
            games,
        } = req.body;

        // Check if the branch name already exists
        const existingBranch = await Branch.findOne({ name });

        if (existingBranch) {
            return res.status(400).json({ error: "Please use a unique branch name" });
        }

        // Create a new Branch object
        const newBranch = new Branch({
            name,
            description,
            image,
            backgroundImage,
            establishedYear,
            collegeAffiliation,
            location,
            contactInformation: {
                email: contactInformation.email,
                phone: contactInformation.phone,
                socialMediaLinks: {
                    linkedIn: contactInformation.socialMediaLinks?.linkedIn,
                    instagram: contactInformation.socialMediaLinks?.instagram,
                },
            },
            events: events.map(event => ({
                eventName: event.eventName,
                eventDate: event.eventDate,
                eventDescription: event.eventDescription,
            })),
            members: members.map(member => ({
                memberId: member.memberId,
                role: member.role,
            })),
            games: games.map(game => ({
                gameId: game.gameId,
                role: game.role,
            })),
        });

        // Save the new branch to the database
        const savedBranch = await newBranch.save();

        return res.status(201).json({ msg: "Branch added successfully", branch: savedBranch });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}


export async function getAllBranches(req, res) {
    try {
        const allBranches = await Branch.find();
        return res.status(200).json({allBranches});
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}


export async function deleteBranch(req, res) {
    try {
        const {branchId } = req.params;
    
        if (branchId) {
          Branch.deleteOne({ _id: branchId }, function (err, data) {
            if (err) throw err;
    
            return res.status(201).send({ msg: "Record Deleted...!" });
          });
        } else {
          return res.status(401).send({ error: "Branch Not Found...!" });
        }
      } catch (error) {
        return res.status(401).send({ error });
      }
}


export async function updateBranch(req, res) {
    try {
        const { branchId } = req.params;
        const {
            name,
            description,
            image,
            backgroundImage,
            establishedYear,
            collegeAffiliation,
            location,
            contactInformation,
            events,
            members,
            games,
        } = req.body;

        if (!branchId) {
            return res.status(400).json({ error: "Branch ID not provided" });
        }

        // Find the branch by ID and update its fields
        const updatedBranch = await Branch.findByIdAndUpdate(
            { _id: branchId },
            {
                name,
                description,
                image,
                backgroundImage,
                establishedYear,
                collegeAffiliation,
                location,
                contactInformation: {
                    email: contactInformation.email,
                    phone: contactInformation.phone,
                    socialMediaLinks: {
                        linkedIn: contactInformation.socialMediaLinks?.linkedIn,
                        instagram: contactInformation.socialMediaLinks?.instagram,
                    },
                },
                events: events.map(event => ({
                    eventName: event.eventName,
                    eventDate: event.eventDate,
                    eventDescription: event.eventDescription,
                })),
                members: members.map(member => ({
                    memberId: member.memberId,
                    role: member.role,
                })),
                games: games.map(game => ({
                    gameId: game.gameId,
                    role: game.role,
                })),
            },
            { new: true } // Returns the updated document
        );

        if (!updatedBranch) {
            return res.status(404).json({ error: "Branch not found" });
        }

        return res.status(200).json({ msg: "Record Updated", branch: updatedBranch });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}