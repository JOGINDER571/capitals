const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Internship = require("../models/internshipModel");

/*
LIST OF CONTROLLERS
1.  Get all Internships of an Employer
*/

// 1. Get all Internships of an Employer
const getAllInternshipsByEmployer = asyncHandler(async (req, res) => {
    const { EmployerId } = req.params
    const Internships = await Internship.find({ EmployerId })
    res.status(200).json({
        success: true,
        data: Internships
    })
});

module.exports = {
    getAllInternshipsByEmployer
};