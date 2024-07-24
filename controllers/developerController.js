import Developer from "../model/Developer.model.js";
import Logger from "../logger/Logger.js";


export const getDevelopers = async (req, res) => {
  try {
    const devs = await Developer.find();
    Logger(': Response 👍 :', 'Developer retrieved successfully', req.url, req.method);
    res.status(200).json(devs);
  } catch (error) {
    Logger(': Request 🙏 :', `Error occurred while fetching Developer: ${error.message}`, req.url, req.method);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};


export async function addDeveloper(req, res) {
  try {
    const roles = req.roles;
    if (roles.lenght === 0 || !roles.includes('admin')) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const {
      name,
      profilePhoto,
      headline,
      socialMediaHandles
    } = req.body;

    // Check if the developer name already exists
    const existingDeveloper = await Developer.findOne({ name });

    if (existingDeveloper) {
      return res.status(400).json({ error: "Developer name already exists" });
    }

    const newDeveloper = new Developer({
      name,
      profilePhoto,
      headline,
      socialMediaHandles
    });

    const savedDeveloper = await newDeveloper.save();

    res.status(201).json({ msg: "Developer added successfully", developer: savedDeveloper });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}


// Update Developer
export async function updateDeveloper(req, res) {
  try {
    const roles = req.roles;
    if (roles.lenght === 0 || !roles.includes('admin')) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { devId } = req.params; // Assuming id is passed in the URL params
    const updateData = req.body;

    const updatedDeveloper = await Developer.findByIdAndUpdate(devId, updateData, {
      new: true // To return the updated document
    });

    if (!updatedDeveloper) {
      return res.status(404).json({ error: "Developer not found" });
    }

    res.json({ msg: "Developer updated successfully", developer: updatedDeveloper });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}

// Delete Developer
export async function deleteDeveloper(req, res) {
  try {
    const roles = req.roles;
    if (roles.lenght === 0 || !roles.includes('admin')) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { devId } = req.params; // Assuming id is passed in the URL params

    const deletedDeveloper = await Developer.findByIdAndDelete(devId);

    if (!deletedDeveloper) {
      return res.status(404).json({ error: "Developer not found" });
    }

    res.json({ msg: "Developer deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}

