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
        {this.props.videos.items.map((video) => (
          <Video key={video.id.videoId} video={video} />
        ))}
      </div>
    );
  }
}

export default Videos;
