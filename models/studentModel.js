const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true }
});
studentSchema.index({ Name: "text", email: "text", phoneNumber: "text", dateOfBirth: "text" });

const student = mongoose.model('Student', studentSchema);

module.exports = student;