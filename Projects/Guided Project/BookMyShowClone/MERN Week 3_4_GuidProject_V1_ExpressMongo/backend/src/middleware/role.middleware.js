//Role middleware : RBAC
exports.authorize = (...roles)=>{
    return(req,res,next)=>{
        if(!req.user || !roles.includes(req.user.role)){
             return res.status(403).json({//user is valid but not authorized
                success: false,
                message: "Access denied: insufficient permission",
            });
        }
        next();
    };
};