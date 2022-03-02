const express = require("express");

const {
    getAllInternshipsByEmployer
} = require("../controllers/employerControllers");

const router = express.Router();


// Get all Internships by a particular Employer
router.route("/getAllInternshipsByEmployer/:employerId").get(getAllInternshipsByEmployer);

module.exports = router;