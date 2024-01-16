import User from "../Models/userModel.js";

const createPost=async(req,res)=>{
    try{
        const {blog_title,blog_description,blog_image_url,blog_category}=req.body;

        const user=await User.findById(req.userId);

        user.blogs.push({blog_title,blog_description,blog_image_url,blog_category})

        await user.save();

        res.status(200).send({success:true,message:"Post created successfully",blogs:user.blogs});
    }
    catch(error){
        res.status(500).send({success:false,message:"Error in Creating Post"});
    }
}
const getUserBlogs=async(req,res)=>{
   try{
      const user=await User.findById(req.userId);

      let blogs=user.blogs || [];

      res.status(200).send({success:true,message:"get blogs successfully",blogs});
   }
   catch(error){
       res.status(500).send({success:false,message:"Error in getting Posts"});
   }   
}
const getAllBlogs=async(req,res)=>{
    try{
        const users=await User.find({});

        const blogs=[];
        const blog_categories=[];

        users.map((eachUser)=>{
            eachUser.blogs.map((eachBlog)=>{
              blogs.push(eachBlog);
              if(eachBlog.blog_category) !blog_categories.includes(eachBlog.blog_category) && blog_categories.push(eachBlog.blog_category)
            })
        })
  
        res.status(200).send({success:true,message:"get blogs successfully",blogs,blog_categories});
     }
     catch(error){
         res.status(500).send({success:false,message:"Error in getting Posts",error:error.message});
     }   
}
const deleteBlog=async(req,res)=>{
    try{
        const {blogId}=req.body;

        const user=await User.findById(req.userId);

        user.blogs=user.blogs.filter((eachBlog)=>{return eachBlog._id!=blogId});

        await user.save();

        res.status(200).send({success:true,message:"Post created successfully",blogs:user.blogs});
    }
    catch(error){
        res.status(500).send({success:false,message:"Error in Creating Post",error:error.message});
    }
}
const getEachBlog=async(req,res)=>{
    try{
        const {blogId}=req.body;

        const users=await User.find({});

        let blog={};

        users.map((eachUser)=>{
            eachUser.blogs.map((eachBlog)=>{
                 if(eachBlog._id==blogId){
                    blog=eachBlog;
                 }  
            })
        })

        if(Object.keys(blog).length===0) return res.status(500).send({success:false,message:"Error in getting Blog",error:"This Blog Not Exists"});
  
        res.status(200).send({success:true,message:"get blog successfully",blog});
     }
     catch(error){
         res.status(500).send({success:false,message:"Error in getting Blog",error:error.message});
     }  
}
export {createPost,getUserBlogs,getAllBlogs,deleteBlog,getEachBlog};