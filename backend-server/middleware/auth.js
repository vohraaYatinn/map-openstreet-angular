import jwt from "jsonwebtoken";
import { User } from "../model/userModel.js";

export const isAuthenticated =async(req,res,next)=>{
    const { token } = req.cookies;

    if (!token) {
        return res.status(404).json({
            success:false,
            message:"login first to access this resource"

        })
    }

    const decoded=jwt.verify("jkdaskddasd") 

    req.user=await User.findById(decoded._id)

    next()

}