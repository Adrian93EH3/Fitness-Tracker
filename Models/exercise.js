const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    Day: {
        type: Date,
        // creates date if no date
        default: () => new Date()
    },
    Exercise: [
        {
            type: {
                type: String,
                // requires the field
                required: "This is required.",
                trim: true
            },
            name: {
                type: String,
                // requires the field
                required: "This is required.",
                trim: true
            },
            duration: {
                type: Number,
                // requires the field
                required: "This is required."
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            },
        }
    ]
  });
  
  const Exercise = mongoose.model("Exercise", ExerciseSchema);
  
  module.exports = Exercise;