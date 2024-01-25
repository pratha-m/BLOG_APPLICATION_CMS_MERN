import jwt from "jsonwebtoken";

const generateToken=(id)=>{
    const token=jwt.sign({_id:id},process.env.JWT_SECRET);
    return token;
}
const otpGenerator=()=>{
    let otp="";
    const rand="0123456789abcdefghijklmnopqrstuvwxyz";
    for(let i=0;i<5;i++){
        otp+=rand[Math.floor(Math.random()*36)];
    }
    return otp;
}
const deleteUserCookie=(res)=>{
    res.clearCookie("BLOG_USER_TOKEN",{
        httpOnly:false,
        path:"/",
        withCredentials:true,
        sameSite: 'None',   
        secure:true,
    });
}
const createUserCookie=(res,token)=>{
    res.cookie("BLOG_USER_TOKEN",token,{
        httpOnly:false,
        path:"/",
        withCredentials:true,
        sameSite: 'None',   
        secure:true,
        maxAge:3*24*60*60*1000,
    })
}

export {generateToken,otpGenerator,deleteUserCookie,createUserCookie};