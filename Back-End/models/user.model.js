import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: Number,
    required: function() {
      return !this.googleId; // required only if googleId is NOT present
    }
  },
  password: {
    type: String,
    required: function() {
      return !this.googleId; // required only if googleId is NOT present
    }
  },
  googleId: {   // add googleId field
    type: String,
    unique: true,
    sparse: true,  // allows multiple docs without googleId
  },
  role: {
    type: String,
    enum: ["client", "freelancer"],
    required: true
  },
  profilePhoto: {
    type: String,
    default: ""
  },
  // Researcher Profile Fields (for freelancers only)
  researcherProfile: {
    title: {
      type: String,
      default: ""
    },
    bio: {
      type: String,
      default: ""
    },
    skills: [{
      type: String
    }],
    expertise: [{
      type: String
    }],
    researchAreas: [{
      type: String
    }],
    degrees: [{
      degree: String,
      institution: String,
      year: String,
      field: String
    }],
    education: [{
      degree: String,
      institution: String,
      year: String,
      field: String
    }],
    experience: [{
      position: String,
      company: String,
      duration: String,
      description: String
    }],
    projects: [{
      title: String,
      description: String,
      technologies: String,
      link: String
    }],
    hourlyRate: {
      type: Number,
      default: 0
    },
    availability: {
      type: String,
      enum: ["", "full-time", "part-time", "contract"],
      default: ""
    },
    profileCompleted: {
      type: Boolean,
      default: false
    },
    lastUpdated: {
      type: Date,
      default: Date.now
    }
  },
  // Bank Account Details (for freelancers only)
  bankAccount: {
    accountHolderName: {
      type: String,
      default: ""
    },
    bankName: {
      type: String,
      default: ""
    },
    accountNumber: {
      type: String,
      default: ""
    },
    ifscCode: {
      type: String,
      default: ""
    },
    accountType: {
      type: String,
      enum: ["", "savings", "current"],
      default: ""
    },
    upiId: {
      type: String,
      default: ""
    }
  }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);
