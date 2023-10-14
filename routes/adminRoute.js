const express = require("express");
const adminRoute = express.Router();
const logger = require('../utility/logger');
const cors = require('cors');
const jwt = require('jsonwebtoken');
adminRoute.use(cors());
const Admin = require("../models/adminscheme");


//login APi
adminRoute.route("/login").post(async (req, res) => {
    try {
      const { email,password } = req.body;
      const useExist = await Admin.findOne({email});
      if (!useExist) {
        // If user not found, return an error
        return res.json({
          responseCode: 401,
          responseStatus: "error",
          responseMsg: "Invalid credentials  ",
          // responseData: ,
        });
      }
      const isMatch = await password === useExist.password;
        if (!isMatch) {
        // If passwords don't match, return an error
        return res.json({
          responseCode: 500,
          responseStatus: "error",
          responseMsg: "Invalid credentials ",
          // responseData: ,
        });
      }
      else{
         // If the user's credentials are correct, generate a JWT token
         const payload = {
          user: {
            id: useExist._id, // You can include any user data you want in the token
            email: useExist.email,
          },
        };

        const newToken = jwt.sign(payload, "JWT_SECRET", { expiresIn: '1h' });

      // Update the user's record with the new token value
      useExist.token = newToken;
     await Admin.updateOne({ _id: useExist._id }, { $set: { token: newToken } })
    .then(result => {
      console.log(`Updated ${result.nModified} user`);
    })
    .catch(error => {
      console.error(error);
    });
          // res.json({ newToken });

        return res.json({
          responseCode: 200,
          responseStatus: "success",
          responseMsg: "User Login Successfully ",
          responseData: useExist,
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

 // Create a Admin
 adminRoute.route("/create").post(async (req, res) => {
    try {
      const { email } = req.body;

      const useExist = await Admin.findOne({email});
      if(useExist !== null){
        res.json({
          responseCode: 500,
          responseStatus: "error",
          responseMsg: "Duplicate Emails",
          // responseData: ,
        });
      }
      else{
      const responseData = new Admin(req.body);
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
  module.exports = adminRoute;