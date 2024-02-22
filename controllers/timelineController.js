import TimelineModel from "../model/Timeline.model.js";

export async function addTimelineEvent(req, res) {
  try {
    const { title, description, date, location, category, link } = req.body;

    const existTimelineTitle = TimelineModel.findOne({ title });
    const existTimelineDescription = TimelineModel.findOne({ description });

    const [existingTimelineTitle, existingTimelineDescription] =
      await Promise.all([existTimelineTitle, existTimelineDescription]);

    if (existingTimelineTitle) {
      return res
        .status(400)
        .json({ error: "Please use a unique timeline title" });
    }

    if (existingTimelineDescription) {
      return res
        .status(400)
        .json({ error: "Please use a unique timeline description" });
    }

    const newTimelineModel = new TimelineModel({
      title,
      description,
      date,
      location,
      category,
      link,
    });

    const savedTimelineModel = await newTimelineModel.save();

    res
      .status(201)
      .json({
        msg: "Timeline event added successfully",
        event: savedTimelineModel,
      });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
}

export async function getAllTimeline(req, res) {
    try {
      const timeline = await TimelineModel.find();
      res.status(200).json({ timeline });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
  }


  export async function deleteTimelineEvent(req, res) {
    try {
        const { timelineId } = req.params;
    
        if (timelineId) {
          TimelineModel.deleteOne({ _id: timelineId }, function (err, data) {
            if (err) throw err;
    
            return res.status(201).send({ msg: "Record Deleted...!" });
          });
        } else {
          return res.status(401).send({ error: "Timeline Not Found...!" });
        }
      } catch (error) {
        return res.status(401).send({ error });
      }
  }

  