 import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      if(!req.User){
        return res.status(401).json({message:"User not found"});
      }
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }
  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};
  
    const admin = (req , res, next) =>{
        if(req.User && req.user.isAdmin){
            next();
        
        }else{
            res.status(403).json({message:"Admin access only"});
        }

    };
export { protect,admin };
