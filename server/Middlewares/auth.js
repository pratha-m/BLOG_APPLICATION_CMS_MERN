import jwt from "jsonwebtoken";

const isAuthenticated=(req,res,next)=>{
    const token=req.cookies.BLOG_USER_TOKEN;

    if(!token) return res.status(500).send({success:false,message:"Pls Login To Make Session"});

    jwt.verify(token,process.env.JWT_SECRET,async function(error,decoded){
        if(error){
            res.cookie("MAPIT_USER_TOKEN","",{expires:new Date(0)});

            return res.status(500).send({success:false,message:"Wrong Cookie"});
        }
        else{
            req.userId=decoded._id;

            next();
        }
    })
}

export {isAuthenticated};