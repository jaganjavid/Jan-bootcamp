import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async(req, res) =>{
    

    const {name, email, password} = req.body;

    try{
        const user = await User.create({name, email, password})
        
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET);

        res.json({token, user:{name:user.name, email:user.email}})

    }catch(err){
        res.status(400).json({message:err.message});
    }

} 