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

  returnVideoLink() {}
  render() {
    console.log("video - Rendered");
    const videoUrl = this.getVideoUrl();
    return (
      <div className="video-preview">
        <div className="thumbnail-row">
          <a href={videoUrl}>
            <img
              className="thumbnail-img"
              src={this.props.video.snippet.thumbnails.high.url}
              alt="test"
            />
          </a>
          <div className="video-time">{this.props.video.id.videoId}</div>
        </div>
        <div className="video-info-grid">
          <div className="channel-picture">
            <img
              className="profile-picture"
              src={this.props.video.snippet.thumbnails.high.url}
              alt="test"
            />
          </div>
          <div className="video-info">
            <p className="video-title">{this.props.video.snippet.title}</p>
            <p className="video-author">{this.props.video.snippet.channelId}</p>
            <p className="video-stats">
              {this.props.video.snippet.publishedAt}
            </p>
          </div>
        </div>
      </div>
    );
  }
  getVideoUrl() {
    let url = "https://www.youtube.com/watch?v=" + this.props.video.id.videoId;
    return url;
  }
}

export default Video;
