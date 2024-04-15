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
    res.clearCookie(process.env.COOKIE_NAME,{
        httpOnly:false,
        path:"/",
        withCredentials:true,
        sameSite: 'None',   
        secure:true,
    });
}
const createUserCookie=(res,token)=>{
    res.cookie(process.env.COOKIE_NAME,token,{
        httpOnly:false,
        path:"/",
        withCredentials:true,
        sameSite: 'None',   
        secure:true,
        maxAge:3*24*60*60*1000,
    })
}
const milliSecToMinute=(milliSeconds)=>{
    return (milliSeconds/1000)/60;
}
const minuteToMilliSec=(minute)=>{
    return minute*60*1000;
}

export {generateToken,otpGenerator,deleteUserCookie,createUserCookie,milliSecToMinute,minuteToMilliSec};