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
    
        const existBranchName = Branch.findOne({ name });
    
        const existingBranchName = await existBranchName;
    
        if (existingBranchName) {
        return res.status(400).json({ error: "Please use a unique branch name" });
        }
    
        const newBranch = new Branch({
        name,
        description,
        image,
        backgroundImage,
        establishedYear,
        collegeAffiliation,
        location,
        contactInformation:{
            email: contactInformation.email,
            phone: contactInformation.phone,
            socialMediaLinks: {
            linkedIn: contactInformation.socialMediaLinks.linkedIn,
            instagram: contactInformation.socialMediaLinks.instagram,
            },
        },
        events:{
            eventName: events.eventName,
            eventDate: events.eventDate,
            eventDescription: events.eventDescription,
        },
        members:{
            memberId: members.memberId,
            role: members.role,
        },
        games:{
            gameId: games.gameId,
            role: games.role,
        }
        });
    
        const savedBranch = await newBranch.save();
    
        return res.status(201).json({msg: "Branch added successfully", branch: savedBranch});
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
        return res.status(401).send({ error: "Branch Not Found...!" });
        }
    
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
            contactInformation:{
            email: contactInformation.email,
            phone: contactInformation.phone,
            socialMediaLinks: {
                linkedIn: contactInformation.socialMediaLinks.linkedIn,
                instagram: contactInformation.socialMediaLinks.instagram,
            },
            },
            events:{
            eventName: events.eventName,
            eventDate: events.eventDate,
            eventDescription: events.eventDescription,
            },
            members:{
            memberId: members.memberId,
            role: members.role,
            },
            games:{
            gameId: games.gameId,
            role: games.role,
            },
        },
        { new: true }
        );
    
        return res.status(201).json({ msg: "Record Updated...!", branch: updatedBranch });
    } catch (error) {
        return res.status(401).send({ error });
    }
}