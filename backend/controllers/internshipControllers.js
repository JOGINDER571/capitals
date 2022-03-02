const asyncHandler = require("express-async-handler");
const Pitch = require("../models/internshipModel");

/*
LIST OF CONTROLLERS
1. Create a new Internship 
2. Get all Internships - for every user

3. Get all frontend Internships - for every user
4. Get all backend Internships - for every user
5. Get all database Internships - for every user
6. Get all fullstack Internships - for every user
7. Get all designing Internships - for every user
8. Get Details of Internship by ID
9. Pay using Razorpay
10. Get details of all Other Internships
11. Add a chapter
*/

// Create a new Internship
const createPitch = asyncHandler(async (req, res) => {
  const {
    userId,
    companyLogo,
    companyName,
    vision,
    problem,
    myTeam,
    solution,
    businessModel,
    futurePlan,
    ask,
    payment
  } = req.body;
  // const instructorId = req.user._id;
  //   console.log(req.body);
  const newPitch = await Pitch.create({
    userId,
    companyLogo,
    companyName,
    vision,
    problem,
    myTeam,
    solution,
    businessModel,
    futurePlan,
    ask,
    payment
  });

  if (newPitch) {
    res.status(201).json({
      success: true,
      data: newPitch,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Pitch not Created Successfully",
    });
  }
});



// Get details of all Internships
// const getAllInternships = asyncHandler(async (req, res) => {
//   const internships = await Internship.find({});
//   if (internships.length > 0) {
//     res.status(200).json({
//       success: true,
//       data: internships,
//     });
//     // console.log("All internships found");
//     // console.log();
//   } else {
//     res.status(200).json({
//       success: false,
//       data: "No Internship found",
//     });
//   }
// });

// // Get details of all Frontend Internships
// const getAllWebdevInternships = asyncHandler(async (req, res) => {
//   const Internships = await Internship.find({ type: "webdev" });
//   if (Internships.length > 0) {
//     res.status(200).json(Internships);
//   } else {
//     res.status(404).json({
//       message: "No Webdev Internship found",
//     });
//   }
// });

// // Get details of all Backend Internships
// const getAllDesigningInternships = asyncHandler(async (req, res) => {
//   const Internships = await Internship.find({ type: "design" });
//   if (Internships.length > 0) {
//     res.status(200).json(Internships);
//   } else {
//     res.status(404).json({
//       message: "No Designing Internship found",
//     });
//   }
// });

// // Get details of all Database Internships
// const getAllDigitalMarketingInternships = asyncHandler(async (req, res) => {
//   const Internships = await Internship.find({ type: "digitalmarketing" });
//   if (Internships.length > 0) {
//     res.status(200).json(Internships);
//   } else {
//     res.status(404).json({
//       message: "No Digital Marketing Internship found",
//     });
//   }
// });

// // Get details of all Fullstack Internships
// const getAllDataScienceInternships = asyncHandler(async (req, res) => {
//   const Internships = await Internship.find({ type: "datascience" });
//   if (Internships.length > 0) {
//     res.status(200).json(Internships);
//   } else {
//     res.status(404).json({
//       message: "No Data Science Internship found",
//     });
//   }
// });

// // Get details of all Designing Internships
// const getAllContentWritingInternships = asyncHandler(async (req, res) => {
//   const Internships = await Internship.find({ type: "contentwriting" });
//   if (Internships.length > 0) {
//     res.status(200).json(Internships);
//   } else {
//     res.status(404).json({
//       message: "No Content Writing Internship found",
//     });
//   }
// });

// // Get details of all Other Internships
// const getAllOtherInternships = asyncHandler(async (req, res) => {
//   const Internships = await Internship.find({ type: "other" });
//   if (Internships.length > 0) {
//     res.status(200).json(Internships);
//   } else {
//     res.status(404).json({
//       message: "No Other Internship found",
//     });
//   }
// });

// // Get details of Internship by ID
// const getInternshipById = asyncHandler(async (req, res) => {
//   const foundInternship = await Internship.findById(req.params.id);
//   if (foundInternship) {
//     // console.log("Particular internship details", Internship)
//     res.status(200).json({
//       success: true,
//       data: foundInternship,
//     });
//     console.log("Particular internship details", foundInternship);
//   } else {
//     res.status(404).json({
//       success: false,
//       error: "No Internship found",
//     });
//   }
// });

// // Get all Internships by ID
// const getAllInternshipsOfUser = asyncHandler(async (req, res) => {
//   const Internships = await Internship.find({ userId: req.params.id });
//   if (Internships) {
//     res.status(200).json({
//       success: true,
//       data: Internships,
//     });
//   } else {
//     res.status(404).json({
//       success: false,
//       error: "No Internship found",
//     });
//   }
// });

// // Get all Internships by instructor
// const getAllInternshipsOfEmployer = asyncHandler(async (req, res) => {
//   const Internships = await Internship.find({ employerId: req.params.id });
//   console.log("Hello testing");
//   if (Internships) {
//     res.status(200).json({
//       success: true,
//       data: Internships,
//     });
//   } else {
//     res.status(404).json({
//       success: false,
//       error: "No Internship found",
//     });
//   }
// });

// // Payment gateway using Razorpay
// const payUsingRazorpay = async (req, res) => {
//   const payment_capture = 1;
//   const amount = 1499;
//   const currency = "INR";

//   const options = {
//     amount: amount * 100,
//     currency,
//     receipt: shortid.generate(),
//     payment_capture,
//   };

//   try {
//     const response = await razorpay.orders.create(options);
//     // console.log(response);
//     res.json({
//       id: response.id,
//       currency: response.currency,
//       amount: response.amount,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = {
  createPitch,
  //        createChapter,
  // getAllInternships,
  // getAllWebdevInternships,
  // getAllDesigningInternships,
  // getAllContentWritingInternships,
  // getAllDigitalMarketingInternships,
  // getAllDataScienceInternships,
  // getAllOtherInternships,
  // getInternshipById,
  // getAllInternshipsOfUser,
  // getAllInternshipsOfEmployer,
  // payUsingRazorpay,
};
