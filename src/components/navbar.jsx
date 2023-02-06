import React, { useState } from "react";
import { Link } from "react-router-dom";
// import React from "react";
import "../general.css";
import "../header.css";
import "../sidebar.css";

// Stateless Functional Component example
const NavBar = (props) => {
  console.log("NavBar - Rendered");
  const [inputValue, setInputValue] = useState("");
  // setInputValue("");

  // class NavBar extends Component {
  //   state = {
  //     inputValue: null,
  //   };
  // console.log(props);
  // constructor(props) {
  //   super(props);
  //   // this.reset();
  // }
  // reset() {
  //   //   // Always set the initial state in its own function, so that
  //   //   // you can trivially reset your components at any point.
  //   this.setState = {
  //     inputValue: "",
  //   };
  // }
  const onFilter = (e) => {
    e.preventDefault();
    inputValue.trim() && props.onInput(inputValue);
    setInputValue("");
    // e.target.reset();
  };
  // render() {
  //   console.log("NavBar - Rendered");
  return (
    <div className="header">
      <div className="left-section">
        <img
          className="hamburger-menu"
          src="icons/hamburger-menu.svg"
          alt="menu"
        />
        <img className="youtube-logo" src="icons/tubeYou.jpeg" alt="youtube" />
      </div>
      <form onSubmit={onFilter} className="middle-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Type filter value here"
          value={inputValue}
          onChange={(evt) => setInputValue(evt.target.value)}
        />
        <div>
          <button
            className="search-button"
            // onClick={() => this.props.onInput(this.state.inputValue)}
          >
            <img
              // onClick={() => this.props.onInput(this.state.inputValue)}
              value={inputValue}
              className="search-icon"
              src="icons/search.svg"
              alt="search"
            />
            <div className="tooltip">Filter</div>
          </button>
        </div>
        <button className="voice-search-button" onClick={() => props.onReset()}>
          <img
            // onClick={() => this.props.onReset()}
            className="voice-search-icon"
            src="icons/refresh-icon.jpeg"
            alt="mic"
          />
          <div className="tooltip">Refresh Search Filter</div>
        </button>
      </form>
      <div className="right-section">
        <div className="sort-icon-container" onClick={() => props.onSort()}>
          <img
            // onClick={() => this.props.onSort()}
            className="sort-icon"
            src="icons/sort.png"
            alt="sort"
          />
          <div className="tooltip">Sort Video Toggle</div>
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
          <div className="notifications-count">{props.totalVideos}</div>
          <div className="tooltip">Count of videos</div>
        </div>
        <img
          className="current-user-picture"
          src="icons/myChannel.jpeg"
          alt="mychannel"
        />
      </div>
      <div className="sidebar">
        <Link to="/">
          <div className="sidebar-link">
            <img src="icons/home.svg" alt="" />
            <div>Home</div>
          </div>
        </Link>
        <Link to="/upload">
          <div className="sidebar-link">
            <img src="icons/upload.svg" alt="" />
            <div>Upload-WIP</div>
          </div>
        </Link>
        <div className="sidebar-link">
          <img src="icons/subscriptions.svg" alt="" />
          <div>Subscriptions-WIP</div>
        </div>
        <div className="sidebar-link">
          <img src="icons/originals.svg" alt="" />
          <div>Originals-WIP</div>
        </div>
        <div className="sidebar-link">
          <img src="icons/youtube-music.svg" alt="" />
          <div>YouTube Music-WIP</div>
        </div>
        <div className="sidebar-link">
          <img src="icons/library.svg" alt="" />
          <div>Library-WIP</div>
        </div>
      </div>
    </div>
  );
  // }
  // updateInputValue(evt) {
  //   const val = evt.target.value;
  //   // ...
  //   this.setState({
  //     inputValue: val,
  //   });
  //   // console.log(val);
  // }
};

export default NavBar;
