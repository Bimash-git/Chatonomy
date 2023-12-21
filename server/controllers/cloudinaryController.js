const axios = require("axios");

const cloudinaryController = async (req, res) => {
    try {
        console.log("Received POST request to /upload-to-cloudinary");
        const cloudinaryResponse = await axios.post("https://api.cloudinary.com/v1_1/dqtib2zku/upload", req.body);
        res.status(201).json(cloudinaryResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" })
    }
}

module.exports = { cloudinaryController };