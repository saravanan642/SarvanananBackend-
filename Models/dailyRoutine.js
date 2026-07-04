const mongoose = require("mongoose");

const dailyRoutineSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },

    wakeUpTime: {
      type: String,
      required: true,
    },

    sleepTime: {
      type: String,
      required: true,
    },

    waterIntake: {
      type: Number, // Litres
      default: 0,
    },

    exercise: {
      type: Boolean,
      default: false,
    },

    exerciseDuration: {
      type: Number, // Minutes
      default: 0,
    },

    studyHours: {
      type: Number,
      default: 0,
    },

    workHours: {
      type: Number,
      default: 0,
    },

    meals: {
      breakfast: {
        type: Boolean,
        default: false,
      },
      lunch: {
        type: Boolean,
        default: false,
      },
      dinner: {
        type: Boolean,
        default: false,
      },
    },

    mood: {
      type: String,
      enum: ["Excellent", "Good", "Average", "Bad"],
      default: "Average",
    },

    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DailyRoutine", dailyRoutineSchema);