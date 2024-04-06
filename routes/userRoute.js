const express = require("express");
const userRoute = express.Router();
const User = require("../models/user");
const logger = require('../utility/logger');
const mongoose = require('mongoose');
const cors = require('cors');
const { getAlluserList } = require("../services/userservices");
userRoute.use(cors());
const multer = require('multer');
const upload = multer({dest:'uploads/'})
userRoute.use("/uploads",express.static('uploads'));

// Create a user
userRoute.route("/create").post(upload.single("userImage"),async (req, res) => {
  try {

    const json = JSON.parse(req.body.json);
  const userImage =req.file?.path;
    const respData = {
      ...json,'userImage':userImage
    }

    const responseData = new User(respData); 
   responseData.save()

    res.json({
      responseCode: 200,
      responseStatus: "success",
      responseMsg: "User Created SuccessFully", 
      responseData: responseData,
    });
  } catch (error) {
    logger.error("Error in route create user", error);
    res.status(500).json({
      responseCode: 500,
      responseStatus: "error",
      responseMsg: "Something went wrong!..",
    });
  }
});


// update Records
userRoute.put('/:id', async (req, res) => {
  try {

    const json = req.body.json;
    const userImage =req.file?.path;
      const respData = {
        ...json,'userImage':userImage
      }

// const updatedUser = await User.findByIdAndUpdate(
//   req.params.id, 
//   respData,
//   { new: true },
//   (err, updatedPerson) => {
//     if(err) {
//       console.log(err);
//     } else {
//       // print updated person
//       console.log(updatedPerson); 
//     }
//   }
// );

    
    const updatedUser = await User.findByIdAndUpdate(req.params.id, json, { new: true });
    res.json({
      responseCode: 200,
      responseStatus: "success",
      responseMsg: "User Updated  SuccessFully",
      responseData: updatedUser,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
});

// list of records
userRoute.get("/",async(req,res)=>{
  try {
    const userList = await User.find();
    res.json({
      responseCode: 200,
      responseStatus: "success",
      responseMsg: "User List SuccessFully",
      responseData: userList,
    });

  } catch (error) {
    res.status(500).json({ error: err.message });

  }
})

//delete of Records
userRoute.delete("/:id",async(req,res)=>{
  try {
    const deletedRecord = await User.findByIdAndDelete(req.params.id);
    res.json({
      responseCode: 200,
      responseStatus: "success",
      responseMsg: "User Deleted SuccessFully",
      responseData: deletedRecord,
    });
  } catch (error) {
    res.status(500).json({ error: err.message });

  }
})

//delete of Records
userRoute.get("/:id",async(req,res)=>{
  try {
    const findDetailById = await User.findById(req.params.id);
    res.json({
      responseCode: 200,
      responseStatus: "success",
      responseMsg: "User Deleted SuccessFully",
      responseData: findDetailById,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });

  }
})


// Get tasks for a specific user based on email
userRoute.post('/filter', async (req, res) => {
  try {
    const tasks = await getAlluserList(req.body.filters);
    res.json({
      responseCode: 200,
      responseStatus: "success",
      responseMsg: "User Deleted SuccessFully",
      responseData: tasks,
    });
  } catch (error) {
    res.status(500).json({
      responseCode: 500,
      responseStatus: "error",
      responseMsg: "Something went wrong!..",
    });
  }
});



module.exports = userRoute;
