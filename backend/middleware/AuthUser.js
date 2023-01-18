import Users from "../models/userModel.js";

export const verifyUser = async (req, res, next) => {
    if(!req.session.userId){
        return res.status(400).json({msg: "Please login to your account."});
    }
    const user = await Users.findOne({
        where:{
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(400).json({msg: "User is not exist"});
    req.userId = user.id;
    req.role = user.role;
    next();
}

export const adminOnly = async (req, res, next) => {
    const user = await Users.findOne({
        where:{
            uuid: req.session.userId
        }
    });

    if(!user) return res.status(400).json({msg: "Please login to your account"});

    if(user.role !== "admin") return res.status(400).json({msg: "Forbidden access"});
    
    next();
}