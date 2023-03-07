import React from 'react';
import "./profile.css";
import Topbar from '../../components/topbar/Topbar'
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
       <Topbar/>
       <div className="profile">
       <Sidebar />
       <div className='profileRight'>
          <div className='profileRightTop'>
             <div className='profileCover'>
             <img 
             className='profileCoverImg' 
             src={`${PF}post/10.jpg`}
             alt=''
             />
             <img 
             className='profileUserImg' 
             src={`${PF}person/5.jpg`}
             alt=''
             />
             </div>

             <div className='profileInfo'>
                <h4 className='profileInfoName'>Luna Lee</h4>
                <span className='profileInfoDesc'> It's Luna Lee Here!! </span>
             </div>
          </div>
          <div className='profileRightBottom'>
            <Feed />
            <Rightbar profile/>
          </div>
       </div>
       </div>
      </>
  );
}
