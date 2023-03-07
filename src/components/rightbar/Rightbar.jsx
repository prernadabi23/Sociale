import React from 'react';
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
  const HomeRightbar = ()=> {
    return(
      <>
      <div className='birthdayContainer'>
             <img className='birthdayImg' src='/assets/gift.png' alt=''/>
             <span className='birthdayText'>
                <b> Jimmy foster</b>  and <b>7 other friends</b> have a birthday today.
              </span>
          </div>
          <img  className='rightbarAd' src='assets/ad.jpg' alt=''/>
          <h4 className='rightbarTitle'>Online Friends</h4>
          <ul className='rightbarFriendList'>
             {Users.map( (u)=> (
                <Online key={u.id} user={u} />
             ))}
          </ul>

      </>
    );
  };

  const ProfileRightbar = () => {
    return (
    <>
      <h4 className='rightbarTitle'>User information</h4>
      <div className='rightbarInfo'>
        <div className='rightbarInfoItem'>
          <span className='rightbarInfoKey'>City:</span>
          <span className='rightbarInfoValue'>Kemp Ave</span>
        </div>
        <div className='rightbarInfoItem'>
          <span className='rightbarInfoKey'>From:</span>
          <span className='rightbarInfoValue'>Moat Lane</span>
        </div>
        <div className='rightbarInfoItem'>
          <span className='rightbarInfoKey'>Relationship:</span>
          <span className='rightbarInfoValue'>Married</span>
        </div>
      </div>
      <h4 className='rightbarTitle'>User Friends</h4>
      <div className='rightbarFollowings'>
        <div className='rightbarFollowing'>
          <img className='rightbarFollowingImg' src={`${PF}person/3.jpg`} alt=''/>
          <span className='rightbarFollowingName'>Jimmy Fox</span>
        </div>
        <div className='rightbarFollowing'>
          <img className='rightbarFollowingImg' src={`${PF}person/7.jpg`} alt='' />
          <span className='rightbarFollowingName'>Jimmy Fox</span>
        </div>
        <div className='rightbarFollowing'>
          <img className='rightbarFollowingImg' src={`${PF}person/6.jpg`} alt=''/>
          <span className='rightbarFollowingName'>Jimmy Fox</span>
        </div>
        <div className='rightbarFollowing'>
          <img className='rightbarFollowingImg' src={`${PF}person/1.jpg`} alt=''/>
          <span className='rightbarFollowingName'>Jimmy Fox</span>
        </div>
        <div className='rightbarFollowing'>
          <img className='rightbarFollowingImg' src={`${PF}person/4.jpg`} alt=''/>
          <span className='rightbarFollowingName'>Jimmy Fox</span>
        </div>
        <div className='rightbarFollowing'>
          <img className='rightbarFollowingImg' src={`${PF}person/10.jpg`} alt=''/>
          <span className='rightbarFollowingName'>Jimmy Fox</span>
        </div>
        <div className='rightbarFollowing'>
          <img className='rightbarFollowingImg' src={`${PF}person/9.jpg`} alt=''/>
          <span className='rightbarFollowingName'>Jimmy Fox</span>
        </div>
        <div className='rightbarFollowing'>
          <img className='rightbarFollowingImg' src={`${PF}person/8.jpg`} alt=''/>
          <span className='rightbarFollowingName'>Jimmy Fox</span>
        </div>
      </div>
    </>
    );
  };


  return (
    <div className="rightbar">
        <div className='rightbarWrapper'> 
         {profile ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
    </div>
  );
}
