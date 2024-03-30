import HeadCouncil from "../model/HeadCouncil.model.js";

export async function addHeadCouncil(req, res) {
    try {
        const { name, position, image, backgroundImage, description, email, phone, social_media } = req.body;
    
        const existHeadCouncil = HeadCouncil.findOne({ email });
        if (existHeadCouncil == null) {
            return res.status(400).json({ error: "Email already exists" });
        }

        const newHeadCouncil = new HeadCouncil({
            name,
            position,
            image,
            backgroundImage,
            description,
            email,
            phone,
            social_media: {
                linkedin: social_media?.linkedin || "",
                instagram: social_media?.instagram || "",
              },
        });
        
        const savedHeadCouncil = await newHeadCouncil.save();
        res.status(201).json({ msg: "Head Council added successfully", headCouncil: savedHeadCouncil });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Internal Server Error", details: error.message });
    }
}


export async function getAllHeadCouncil(req, res) {
    try {
        const headCouncil = await HeadCouncil.find();
        res.status(200).json({ headCouncil });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}

export async function deleteHeadCouncil(req, res) {
    try {
        const { headCouncilId } = req.params;
    
        if (headCouncilId) {
          HeadCouncil.deleteOne({ _id: headCouncilId }, function (err, data) {
            if (err) throw err;
    
            return res.status(201).send({ msg: "Record Deleted...!" });
          });
        } else {
          return res.status(401).send({ error: "HeadCouncil Not Found...!" });
        }
      } catch (error) {
        return res.status(401).send({ error });
      }
}


export async function updateHeadCouncil(req, res) {
  try {
      const { headCouncilId } = req.params;
      const { name, position, image, backgroundImage, description, email, phone, social_media } = req.body;

      if (!headCouncilId) {
          return res.status(400).send({ error: "Missing headCouncilId parameter." });
      }

      const headCouncil = await HeadCouncil.findById(headCouncilId);

      if (!headCouncil) {
          return res.status(404).send({ error: "HeadCouncil not found." });
      }

      headCouncil.name = name || headCouncil.name;
      headCouncil.position = position || headCouncil.position;
      headCouncil.image = image || headCouncil.image;
      headCouncil.backgroundImage = backgroundImage || headCouncil.backgroundImage;
      headCouncil.description = description || headCouncil.description;
      headCouncil.email = email || headCouncil.email;
      headCouncil.phone = phone || headCouncil.phone;
      headCouncil.social_media = {
          linkedin: social_media?.linkedin || "",
          instagram: social_media?.instagram || "",
      };

      const updatedHeadCouncil = await headCouncil.save();
      return res.status(200).send({ msg: "Record Updated!", headCouncil: updatedHeadCouncil });
  } catch (error) {
      return res.status(500).send({ error: "Internal Server Error", details: error.message });
  }
}