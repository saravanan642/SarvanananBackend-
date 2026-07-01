const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    age: { type: Number, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    isActive: { type: Boolean, default: true },
    dob: { type: Date },
    profileImage: { type: String },
    skills: { type: [String] },
    marks: { type: Number, default: 0 }
},{
    timestamps : true
}
);

module.exports = mongoose.model("Employee", employeeSchema);