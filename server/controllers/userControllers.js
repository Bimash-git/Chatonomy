const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const registerUser = async (req, res) => {
    try {
        const { name, email, password, pic } = req.body;

        if (!name || !email || !password) {
            res.status(400);
            throw new Error("please enter all the fields");
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            res.status(400);
            throw new Error("User already exists");
        }

        const user = await User.create({
            name,
            email,
            password,
            pic
        })

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                pic: user.pic,
                token: generateToken(user._id)
            })
        }
        else {
            res.status(400);
            throw new Error("User Creation failed");
        }

    } catch (error) {
        console.log("Error Occurred:  ", error);
    }
}


const authUser = async(req, res) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                email: user.email,
                password: user.password,
                token: generateToken(user._id)
            })
        }
        else {
            res.status(401);
            throw new Error("Invalid email or password");
        }
        
    } catch (error) {
        console.log("Error Occures:  ", error);
    }
}
module.exports = { registerUser, authUser };