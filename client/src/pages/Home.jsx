import { useEffect, useState } from "react";
import "../css/pages/home.css";
import Blogs from "./blogPage/Blogs";
import axios from "axios";
import Loader from "../components/Loader";
// import TextSlider from "../components/textSlider/TextSlider";

const Home = () => {
   const [blogsData,setBlogsData]=useState({
    isLoading:true,
    blogs:[],
    categories:[],
    selectedCategories:[]
   })

  const fetchBlogs=async()=>{
    try{
        setBlogsData({...blogsData,isLoading:true})
        const result=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/post/all`,{});
        if(result.status==200){
            setBlogsData({isLoading:false,blogs:result.data.blogs,categories:result.data.blog_categories})
        }   
    }
    catch(error){
        setBlogsData({...blogsData,isLoading:false})
        if(error.response){
            console.log(error.response.data.message)
        }
        else{
            console.log("error in getting Blogs");
        }
    }
 }
  useEffect(()=>{
     fetchBlogs();
  },[]);
 
  return (
    <div id='homePage'>
        <h1>All Blogs</h1>
        {/* <TextSlider blogsData={blogsData} setBlogsData={setBlogsData}/> */}
        {blogsData.isLoading?"Loading...":<Blogs blogsData={blogsData}/>}
    </div>
  )
}

export default Home;