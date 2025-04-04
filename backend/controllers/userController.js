import User from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'

//Auth user and get token
// route --->  /api/users/login  (POST request)
//public route

const authUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return res.status(401).json({ success: false, message: "Incorrect email or password" });
        }

        // Validate password
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return res.status(401).json({ success: false, message: "Incorrect email or password" });
        }

        // 🔥 Generate Access & Refresh Tokens
        const accessToken = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: "15m" }); // Access Token expires in 15 min
        const refreshToken = jwt.sign({ id: validUser._id }, process.env.REFRESH_SECRET, { expiresIn: "30d" }); // Refresh Token expires in 30 days

        

        // 🔒 Store Refresh Token in Secure HTTP-only Cookie
        res.cookie("refresh_token", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Secure only in production
            sameSite: "Strict",  
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
        });

        // Exclude password before sending response
        const { password: pass, ...rest } = validUser._doc;

        // 🎯 Send Success Response with Access Token
        res.status(200).json({
            success: true,
            message: "Login Successful",
            user: rest,
            accessToken
        });

    } catch (error) {
        next(error);
    }
};



//Register Users
//route ----> /api/users/register   (POST request)
//Public route

const registerUser = async (req, res, next) => {
    try {
        let { name, email, password } = req.body;

        // Validate required fields
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and password are required!" });
        }

        // Assign default name if empty
        if (!name || name.trim() === "") {
            name = "Anonymous";
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email is already registered!" });
        }

        // Hash password
        const hashedPassword = await bcryptjs.hash(password, 10);

        // Create new user
        const newUser = new User({ name, email, password: hashedPassword });

        await newUser.save();

        // 🔥 Generate Access & Refresh Tokens
        const accessToken = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "15m" });
        const refreshToken = jwt.sign({ id: newUser._id }, process.env.REFRESH_SECRET, { expiresIn: "30d" });

        // 🔒 Store the Refresh Token in a secure HTTP-only cookie
        res.cookie("refresh_token", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production" ? true : false,  // secure only if app is in production.
            sameSite: "Strict",
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
        });

        // 🎯 Send success response with Access Token
        res.status(201).json({
            success: true,
            message: "User Registered & Logged In",
            user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                isAdmin: newUser.isAdmin
            },
            accessToken
        });

    } catch (error) {
        next(error);
    }
};




//logout user  (also clear the cookie)
//route ---->/api/users/logout         (POST request)
//private


const logoutUser = (req, res) => {
    try {
        res.clearCookie("access_token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Secure in production
            sameSite: "Strict",
            expires: new Date(0) // Expire immediately
        });

        res.clearCookie("refresh_token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            expires: new Date(0)
        });

        res.status(200).json({ success: true, message: "Logged out successfully" });

    } catch (error) {
        res.status(500).json({ success: false, message: "Logout failed" });
    }
};


//get user profile
////route ---->/api/users/profile         (GET request)
//private   


const getUserProfile=async(req,res,next)=>{
    try {
        const user=await User.findById(req.user._id)
        if(user){
            res.status(200).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin
            })
        }
        else{
            res.status(404).json({message:"User not found"})
        }
    } catch (error) {
        next(error)
    }

}

//update user profile
//route ---->/api/users/profile         (PUT request)
//private

const updateUserProfile=async(req,res)=>{
    try {
        const user=await User.findById(req.user._id)
        if(user){
            user.name=req.body.name || user.name;
            user.email =req.body.email || user.email;

            if(req.body.password){
                user.password=req.body.password;
            }

            const updatedUser= await user.save()

            res.status(200).json({
                _id:updatedUser._id,
                name:updatedUser.name,
                email:updatedUser.email,
                isAdmin:updatedUser.isAdmin
            })
        }
        else{
            res.status(404).json({message:"User not found"})
        }

    } catch (error) {
        next(error)
    }
}

//Get Users
//route ---> GET api/users         (GET request)
//private/Admin

const getUsers=async(req,res)=>{
    res.send('Users') 

}

//Get User by id
//route ---> GET api/users/:id         (GET request)
//private/Admin

const getUserbyId=async(req,res)=>{
    res.send('Get User by ID') 

}

//Delete User by id
//route ---> GET api/users/:id    (DELETE request)
//private/Admin

const deleteUser=async(req,res)=>{
    res.send('Delete Users') 

}

//Update User by id
//route ---> GET api/users/:id    (PUT request)
//private/Admin

const updateUser=async(req,res)=>{
    res.send('update Users') 

}

export { authUser,registerUser,logoutUser,getUserProfile,updateUserProfile,getUsers,getUserbyId,deleteUser,updateUser}
