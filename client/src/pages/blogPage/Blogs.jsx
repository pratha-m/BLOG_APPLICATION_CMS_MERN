import { Link } from "react-router-dom";
import "./Blogs.css"

const Blogs = ({blogsData}) => {
  const titleTrimming=(title)=>{
    if(title) return (title.length<36?title:`${title.substring(0,35)}...`)
    else return "N/A";
  }
  const descriptionTrim=(desc)=>{
    if(desc) return desc.length<141?desc:desc.substring(0,140);
    else return "N/A";
  }
  return (
    <div className="blogsContainer">
      {blogsData.isLoading && "Loading..."}
      {!blogsData.isLoading && blogsData.blogs.length<1 && "Sorry No Blogs Found"}
      {
        !blogsData.isLoading && blogsData.blogs && blogsData.blogs.map((eachBlog)=>{
             return (
                <div key={eachBlog._id} className="eachBlog">
                    <div  className="eachBlogImage">
                     <img src={eachBlog.blog_image_url} />
                    </div>
                    <div className="eachBlogText">
                        <h2>{titleTrimming(eachBlog.blog_title)}</h2>
                        {eachBlog.blog_category && <span className="blogCategory">{eachBlog.blog_category}</span>}
                        <p>{descriptionTrim(eachBlog.blog_description)}
                          {eachBlog.blog_description.length>=141 && <Link to={`/blogs/?blogid=${eachBlog._id}`} className="readMoreLink">Read More</Link>}
                        </p>
                    </div>
                </div>
             ); 
        })
      }
    </div>
  );
}

export default Blogs