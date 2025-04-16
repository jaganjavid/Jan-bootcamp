import jwt from "jsonwebtoken";
import User from "../models/User.js";



const generateTokenAndSetCookie = (user, res) => {

    const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn:"7d"});

    res.cookie("token", token, {
        httpOnly:true,
        sameSite:"strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })
    


}

export const register = async(req, res) =>{
    

    const {name, email, password} = req.body;

    try{
        const user = await User.create({name, email, password})
        
        generateTokenAndSetCookie(user, res)

        res.json({ user:{name:user.name, email:user.email}})

    }catch(err){
        res.status(400).json({message:err.message});
    }

} 

export const login = async(req, res) => {

    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(!user || !(await user.matchPassword(password))){
        return res.status(401).json({message:"Invalid credentials"})
    }

    generateTokenAndSetCookie(user, res)

    res.json({ user:{name:user.name, email:user.email}})

    res.json({token, user: {name:user.name, email:user.email}});

}