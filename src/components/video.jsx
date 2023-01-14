import React, { Component } from "react";
// import "../general.css";
// import "../header.css";
// import "../sidebar.css";
import "../video.css";

class Video extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("video - prevProps: ", prevProps);
    console.log("video - prevState: ", prevState);
  }
  componentWillUnmount() {
    console.log("video -  Unmount");
  }

  render() {
    console.log("video - Rendered");
    return (
      <div className="video-preview">
        <div className="thumbnail-row">
          <img
            className="thumbnail-img"
            src={this.props.video.thumbnail}
            alt="test"
          />
          <div className="video-time">{this.props.video.time}</div>
        </div>
        <div className="video-info-grid">
          <div className="channel-picture">
            <img
              className="profile-picture"
              src={this.props.video.channel}
              alt="test"
            />
          </div>
          <div className="video-info">
            <p className="video-title">{this.props.video.title}</p>
            <p className="video-author">{this.props.video.author}</p>
            <p className="video-stats">{this.props.video.stats}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
