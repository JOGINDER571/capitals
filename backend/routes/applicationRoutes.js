const express = require("express");

const {
    createApplication,
    getAllApplicationsOfUser,
} = require("../controllers/applicationControllers");

const {
    employerProtect,
    protect,
} = require("../middlewares/protectedRoutes");

const router = express.Router();

// Submit new Application
router.route("/createApplication").post(createApplication);

// Get all assignments of a user by userId
router.route("/getApplicationsOfUser/:id").get(getAllApplicationsOfUser);

module.exports = router;