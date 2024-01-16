import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import "./DetailedBlogPage.css";
// import TextSlider from "../../components/textSlider/TextSlider";

const DetailedBlogPage=()=>{
  const [eachBlog,setEachBlog]=useState({isLoading:true,blog:{}});  
  const navigate=useNavigate();
  
  const location=useLocation();
  const params=new URLSearchParams(location.search);
  const blogId=params.get("blogid")
   
  const getEachBlog=useCallback(async()=>{
    try{
        setEachBlog((prev)=>({...prev,isLoading:true}))
        const result=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/post/get/each`,{blogId},{withCredentials:true});
        if(result.status==200){
            setEachBlog({isLoading:false,blog:result.data.blog})
        }   
    }
    catch(error){
        setEachBlog((prev)=>({...prev,isLoading:false}))
        navigate("/");
    }    
  },[blogId,navigate]);

  useEffect(()=>{
    getEachBlog();
  },[getEachBlog])

  return (
    <div className="detailBlogPage">
        <div className="blogPageContainer">
           <h1 className="blogTitle">{eachBlog.blog.blog_title}</h1>  
           <div className="blogImage">
             <img src={eachBlog.blog.blog_image_url} alt="" />
           </div>
           <div className="blogDescription">{eachBlog.blog.blog_description}</div>
        </div>
    </div>
  )
}

export default DetailedBlogPage