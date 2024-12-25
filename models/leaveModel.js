const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
    leaveType: {type: String, required: true},
    startDate: {type: Date},
    enddate:  {type: Date},
    status: {type: String},   
    employee: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }]

});
leaveSchema.index({ Name: "text", email: "text"});

const Leave = mongoose.model('Leave', leaveSchema);

module.exports = Leave;

