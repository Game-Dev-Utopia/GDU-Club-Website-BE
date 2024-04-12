import mongoose, { Schema, model } from "mongoose";


const boardMembersSchema = Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  data: [{
    name: {
      type: String,
      required: true
    },
    designation: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    profileImageURL: {
      type: String,
      required: true
    },
    bgImageURL: {
      type: String,
      required: true
    },
    linkedin: [{
      type: String,
      
    }, {
      type: String
    }],
    github: [{
      type: String,
      
    }, {
      type: String
    }],
    instagram: [{
      type: String,
    }, {
      type: String
    }]
  }]
});


const branchSchema = Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  data: [{
    name: {
      type: String,
      required: true
    },
    designation: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    profileImageURL: {
      type: String,
      required: true
    },
    bgImageURL: {
      type: String,
      required: true
    },
    linkedin: [{
      type: String,
      
    }, {
      type: String
    }],
    github: [{
      type: String,
      
    }, {
      type: String
    }],
    instagram: [{
      type: String,

    }, {
      type: String
    }]
  }]
});

const topContributionsAndProjectsSchema = Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  data: [{
    name: {
      type: String,
      required: true
    },
    designation: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    profileImageURL: {
      type: String,
      required: true
    },
    bgImageURL: {
      type: String,
      required: true
    },
    linkedin: [{
      type: String,
      
    }, {
      type: String
    }],
    github: [{
      type: String,
      
    }, {
      type: String
    }],
    instagram: [{
      type: String,

    }, {
      type: String
    }]
  }]
});

const OurTeamsSchema = Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  data: [{
    name: {
      type: String,
      required: true
    },
    designation: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    profileImageURL: {
      type: String,
      required: true
    },
    bgImageURL: {
      type: String,
      required: true
    },
    linkedin: [{
      type: String,
      
    }, {
      type: String
    }],
    github: [{
      type: String,
      
    }, {
      type: String
    }],
    instagram: [{
      type: String,

    }, {
      type: String
    }]
  }]
});

const specialThanksSchema = Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  data: [{
    name: {
      type: String,
      required: true
    },
    designation: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    profileImageURL: {
      type: String,
      required: true
    },
    bgImageURL: {
      type: String,
      required: true
    },
    linkedin: [{
      type: String,
      
    }, {
      type: String
    }],
    github: [{
      type: String,
      
    }, {
      type: String
    }],
    instagram: [{
      type: String,

    }, {
      type: String
    }]
  }]
});


const aboutUsSchema = new Schema({
  boardMembersData: [boardMembersSchema],
  branchesData: [branchSchema],
  ourTeamsData: [OurTeamsSchema],
  specialThanksData: [specialThanksSchema],
  topContributionsAndProjects: [topContributionsAndProjectsSchema],
});
// Check if the model already exists before defining it
const AboutUs = model('AboutUs', aboutUsSchema);

export default AboutUs;

