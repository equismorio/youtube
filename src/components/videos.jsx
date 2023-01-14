import React, { Component } from "react";
import Video from "./video";
import "../general.css";
import "../header.css";
import "../sidebar.css";
import "../video.css";

class Videos extends Component {
  render() {
    console.log("Videos - Rendered");
    return (
      <div className="video-grid">
        {this.props.videos.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </div>
    );
  }
}

export default Videos;
