const express = require("express");
const router = express.Router();
const { cloudinaryController } = require("../controllers/cloudinaryController");

router.post("/upload-to-cloudinary", cloudinaryController);

module.exports = router;