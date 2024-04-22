import AboutUs from "../model/AboutUs.model.js";

export const getAboutUsData = async (req, res) => {
  try {
    const aboutUsData = await AboutUs.findOne(); // Assuming there's only one document in the collection

        if (!aboutUsData) {
            return res.status(404).json({ error: "About Us data not found" });
        }

        // Extracting data from the aboutUsData object as needed
        const { branchesData, topContributionsAndProjects, ourTeamsData, specialThanksData, boardMembersData } = aboutUsData;

        // Constructing the expected form
        const expectedFormData = {
            boardMembersData,
            branchesData,
            ourTeamsData,
            specialThanksData,
            topContributionsAndProjects,
        };

        res.status(200).json(expectedFormData);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};

export const postAboutUsData = async (req, res) => {
  try {
    const {
      boardMembersData,
      branchesData,
      ourTeamsData,
      specialThanksData,
      topContributionsAndProjects,
    } = req.body;

    let existingAboutUsContent = await AboutUs.findOne();

    if (!existingAboutUsContent) {
      const newAboutUsModel = new AboutUs({
        boardMembersData,
        branchesData,
        ourTeamsData,
        specialThanksData,
        topContributionsAndProjects,
      });

      const savedAboutUsModel = await newAboutUsModel.save();
      return res.status(200).json({
        msg: "About Us content added successfully",
        content: savedAboutUsModel,
      });
    }

    existingAboutUsContent.branchesData = branchesData;
    existingAboutUsContent.topContributionsAndProjects =
      topContributionsAndProjects;
    existingAboutUsContent.ourTeamsData = ourTeamsData;
    existingAboutUsContent.specialThanksData = specialThanksData;
    existingAboutUsContent.boardMembersData = boardMembersData;

    const updatedAboutUsContent = await existingAboutUsContent.save();

    res
      .status(200)
      .json({
        message: "About Us data updated successfully",
        content: updatedAboutUsContent,
      });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};
