const express = require("express");
const userRoute = express.Router();
const User = require("../models/user");
const logger = require('../utility/logger');
const cors = require('cors');
userRoute.use(cors());


// Create a user
userRoute.route("/create").post(async (req, res) => {
  try {
    const { email } = req.body;

    const useExist = await User.findOne({email});
    if(useExist !== null){
      res.json({
        responseCode: 500,
        responseStatus: "error",
        responseMsg: "Duplicate Emails",
        // responseData: ,
      });
    }
    else{
    const responseData = new User(req.body);
   responseData.save()

    res.json({
      responseCode: 200,
      responseStatus: "success",
      responseMsg: "User Created SuccessFully",
      responseData: responseData,
    });
    }
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
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({
      responseCode: 200,
      responseStatus: "success",
      responseMsg: "User Updated  SuccessFully",
      responseData: updatedUser,
    });
  } catch (err) {
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


module.exports = userRoute;
