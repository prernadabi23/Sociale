import React from 'react';
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import {Link} from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">Sociale</span>
            </Link>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
          <Search className="searchIcon"/>
          <input placeholder="Search for friend, post or video" className="searchInput">

          </input>
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
          <Link to="/login"  style={{ textDecoration: 'none' }}><span className="topbarLink">Login</span></Link>
          <Link to="/register" style={{ textDecoration: 'none' }}> <span className="topbarLink">Register</span> </Link>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem"></div>
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem"></div>
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem"></div>
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
          <Link to="/Profile/:Luna">
          <img src="/assets/person/5.jpg" className="topbarImg" alt=''></img>

          </Link>
        </div>
    </div>
  );
}

