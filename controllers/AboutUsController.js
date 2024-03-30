import AboutUsModel from '../model/AboutUs.model.js';

export async function getAboutUsContent(req, res) {
  try {
    const aboutUsContent = await AboutUsModel.findOne();

    if (!aboutUsContent) {
      return res.status(404).json({ error: 'About Us content not found' });
    }

    res.status(200).json({ aboutUsContent });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}

export async function updateAboutUsContent(req, res) {
  try {
    const { title, description, team, branches, headCouncil } = req.body;

    let existingAboutUsContent = await AboutUsModel.findOne();

    if (!existingAboutUsContent) {
      const newAboutUsModel = new AboutUsModel({
        title,
        description,
        team,
        branches,
        headCouncil,
      });

      const savedAboutUsModel = await newAboutUsModel.save();
      return res.status(201).json({
        msg: 'About Us content added successfully',
        content: savedAboutUsModel,
      });
    }

    existingAboutUsContent.title = title;
    existingAboutUsContent.description = description;
    existingAboutUsContent.team = team;
    existingAboutUsContent.branches = branches;
    existingAboutUsContent.headCouncil = headCouncil;

    const updatedAboutUsContent = await existingAboutUsContent.save();

    res.status(200).json({
      msg: 'About Us content updated successfully',
      content: updatedAboutUsContent,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}

export async function addFuturePlan(req, res) {
  try {
    const { title, description, date } = req.body;

    const newFuturePlan = new FuturePlanModel({
      title,
      description,
      date,
    });

    const savedFuturePlan = await newFuturePlan.save();

    res.status(201).json(savedFuturePlan);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}

export async function getAllFuturePlans(req, res) {
  try {
    const futurePlans = await FuturePlanModel.find();

    res.status(200).json(futurePlans);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}

export async function getFuturePlanById(req, res) {
  try {
    const futurePlan = await FuturePlanModel.findById(req.params.id);

    if (!futurePlan) {
      return res.status(404).json({ error: 'Future Plan not found' });
    }

    res.status(200).json(futurePlan);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}

export async function updateFuturePlan(req, res) {
  try {
    const { title, description, date } = req.body;

    const updatedFuturePlan = await FuturePlanModel.findByIdAndUpdate(
      req.params.id,
      { title, description, date },
      { new: true }
    );

    if (!updatedFuturePlan) {
      return res.status(404).json({ error: 'Future Plan not found' });
    }

    res.status(200).json(updatedFuturePlan);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}

export async function deleteFuturePlan(req, res) {
  try {
    const deletedFuturePlan = await FuturePlanModel.findByIdAndDelete(req.params.id);

    if (!deletedFuturePlan) {
      return res.status(404).json({ error: 'Future Plan not found' });
    }

    res.status(200).json({ message: 'Future Plan deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
