import { useEffect, useState } from 'react'
import {Link,useLocation, useNavigate} from "react-router-dom";
import "../css/components/header.css";
import axios from 'axios';

const Header = ({userStatus,setUserStatus,userData,runUseEffNo,setRunUseEff}) => {
  const navigate=useNavigate();
  const location=useLocation();
  const [urlPath,setUrlPath]=useState(location.pathname);

  useEffect(()=>{
    setUrlPath(location.pathname);
  },[location.pathname]);
  
  const logout=async()=>{
    try{
      setUserStatus({...userStatus,isFetching:true});
      const result=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/logout`,{},{withCredentials:true});
      if(result.status===200){
        setUserStatus({...userStatus,isLoggedIn:false})
        setRunUseEff(runUseEffNo+1);
        navigate("/");
      }
    }
    catch(error){
      if(error.response) console.log(error.response.data.message);
      else console.log("Error in Logout"); 
    } 
  }
  // console.log(document.cookie)
    // document.cookie="BLOG_USER_TOKEN=;expires=Thu,01 Jan 1970 00:00:00 UTC; path=/;";
  const toggleDropdown=()=>{
     let userDropdown=document.getElementById("userDropdown");
     if(userDropdown.classList.contains("hideUserDropdown")){
        userDropdown.classList.remove("hideUserDropdown"); 
        userDropdown.classList.add("showUserDropdown"); 
     }
     else{
       userDropdown.classList.remove("showUserDropdown"); 
       userDropdown.classList.add("hideUserDropdown"); 
     }
  }

  

  return (
    <>
    <input type="checkbox" id="expand-toggler"/>
    <header className="header">
        <div className="logoContainer">
          <Link to="/">BLOGII</Link>
          <label htmlFor="expand-toggler" id="expand-btn">
              <img src="/images/hamburgericon.png" id="hambergerIcon" alt="" />
              <img src="/images/crossicon.png" id="crossIcon" alt="" />
          </label>
        </div>
        <nav>
            <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>  
        <div className='signInBtnContainer'>
          {
           
           userStatus.isLoggedIn?
            (
            <>
             <button className='signInButton userLoggedBtn' onClick={toggleDropdown} type='button'>{userData.name.length<=9?userData.name:userData.name.substring(0,10)+".."}</button>  
             <div className="userDropdown hideUserDropdown" id='userDropdown'>
               <div className="eachOption" onClick={()=>{navigate("/profile")}}>Profile</div>
               {userStatus.isAdmin && <div className="eachOption"><Link to="/admin">Admin</Link></div>}
               <div className="eachOption" onClick={()=>logout()}>Logout</div>
             </div>
            </>
            ):
           (<button className='signInButton'><Link to="/login">Sign In</Link></button>)
          }
        </div>
    </header>
    </>
  )
}

export default Header