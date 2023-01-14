import React from "react";
import "../general.css";
import "../header.css";
import "../sidebar.css";

// Stateless Functional Component example
const NavBar = (props) => {
  console.log("NavBar - Rendered");
  return (
    <div className="header">
      <div className="left-section">
        <img
          className="hamburger-menu"
          src="icons/hamburger-menu.svg"
          alt="menu"
        />
        <img
          className="youtube-logo"
          src="icons/youtube-logo.svg"
          alt="youtube"
        />
      </div>
      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />
        <button className="search-button">
          <img className="search-icon" src="icons/search.svg" alt="search" />
          <div className="tooltip">Search</div>
        </button>
        <button className="voice-search-button">
          <img
            className="voice-search-icon"
            src="icons/voice-search-icon.svg"
            alt="mic"
          />
          <div className="tooltip">Search with your voice</div>
        </button>
      </div>
      <div className="right-section">
        <div className="upload-icon-container">
          <img className="upload-icon" src="icons/upload.svg" alt="upload" />
          <div className="tooltip">Upload</div>
        </div>
        <div className="youtube-apps-container">
          <img
            className="youtube-apps-icon"
            src="icons/youtube-apps.svg"
            alt="apps"
          />
          <div className="tooltip">YouTube Apps</div>
        </div>
        <div className="notifications-icon-container">
          <img
            className="notification-icon"
            src="icons/notifications.svg"
            alt="notifications"
          />
          <div className="notifications-count">3</div>
          <div className="tooltip">Notifications</div>
        </div>
        <img
          className="current-user-picture"
          src="icons/my-channel.jpeg"
          alt="mychannel"
        />
      </div>
      <div className="sidebar">
        <div className="sidebar-link">
          <img src="icons/home.svg" alt="" />
          <div>Home</div>
        </div>
        <div className="sidebar-link">
          <img src="icons/explore.svg" alt="" />
          <div>Explore</div>
        </div>
        <div className="sidebar-link">
          <img src="icons/subscriptions.svg" alt="" />
          <div>Subscriptions</div>
        </div>
        <div className="sidebar-link">
          <img src="icons/originals.svg" alt="" />
          <div>Originals</div>
        </div>
        <div className="sidebar-link">
          <img src="icons/youtube-music.svg" alt="" />
          <div>YouTube Music</div>
        </div>
        <div className="sidebar-link">
          <img src="icons/library.svg" alt="" />
          <div>Library</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
