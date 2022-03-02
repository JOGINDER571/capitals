const mongoose = require("mongoose");

const PitchSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    companyName: {
      type: String,
      required: true,
    },
    companyLogo: {
      type: String,
      // required: true,
      default:
        "https://media.istockphoto.com/vectors/businessman-avatar-icon-profession-logo-male-character-a-man-in-suit-vector-id1126791018?k=20&m=1126791018&s=170667a&w=0&h=qfHYWoeGkS5Xmg6RNzujdQOpbWarSACoXICDC7TlLvg=",
    },
    vision: {
      type: String,
      required:true,
    },
    problem: {
      type: Number,
      required: true,
    },
    myTeam: {
      type: Number,
      required: true,
    },
    solution: {
      type: String,
      required: true,
    },
    businessModel: {
      type: String,
      required: true,
    },
    futurePlan: {
      type: String,
      required: true,
    },
    ask: {
      type: Number,
      required: true,
    },
    payment: {
      type: String,
      required:true
    },
    
  },
  {
    timestamps: true,
  }
);

const Pitch = mongoose.model("Pitch", PitchSchema);

module.exports = Pitch;

