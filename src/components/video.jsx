import React, { Component } from "react";
// import "../general.css";
// import "../header.css";
// import "../sidebar.css";
import "../video.css";
// import moment from "moment-precise-range-plugin";
// import moment from "moment";
const moment = require("moment");
require("moment-precise-range-plugin");

class Video extends Component {
  componentDidUpdate(prevProps, prevState) {
    // console.log("video - prevProps: ", prevProps);
    // console.log("video - prevState: ", prevState);
  }
  componentWillUnmount() {
    // console.log("video -  Unmount");
  }

  render() {
    // console.log("video - Rendered");
    const videoUrl = this.getVideoUrl();
    const description = this.getDescription();
    const duration = this.getDuration();
    return (
      <div className="video-preview">
        <div className="thumbnail-row">
          <a href={videoUrl}>
            <img
              className="thumbnail-img"
              src={this.props.video.snippet.thumbnails.medium.url}
              alt="test"
            />
          </a>
          <div className="video-time">{this.props.video.time}</div>
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
            <p className="video-description">{description}</p>
            <p className="video-stats">{duration}</p>
          </div>
        </div>
      </div>
    );
  }
  getVideoUrl() {
    let url = "https://www.youtube.com/watch?v=" + this.props.video.id.videoId;
    return url;
  }
  getDescription() {
    return this.props.video.snippet.description
      ? this.props.video.snippet.description
      : "Missing description.";
  }
  getDuration() {
    let starts = moment(this.props.video.snippet.publishedAt);
    // let starts = moment("2014-02-03 12:53:12");
    let ends = moment();
    return moment.preciseDiff(starts, ends);
    // example: 2 years 7 months 6 hours 29 minutes 17 seconds
  }
}

export default Video;
