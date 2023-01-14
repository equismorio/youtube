import React, { Component } from "react";
import NavBar from "./components/navbar";
import Videos from "./components/videos";
import "./general.css";
import "./header.css";

class App extends Component {
  state = {
    videos: [
      {
        thumbnail: "thumbnails/thumbnail-1.webp",
        channel: "channels/channel-1.jpeg",
        title: "Talking Tech and AI with Google CEO Sundar Pichai!",
        author: "Marques Brownlee",
        stats: "3.4M views · 6 months ago",
        time: "14:20",
      },
      {
        thumbnail:
          "https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-2.webp",
        // thumbnail: "thumbnails/thumbnail-2.webp",
        channel: "channels/channel-2.jpeg",
        title: "Try Not To Laugh Challenge #9",
        author: "Markiplier",
        stats: "19M views · 4 years ago",
        time: "8:22",
      },
      {
        thumbnail: "./thumbnails/thumbnail-3.webp",
        channel: "channels/channel-3.jpeg",
        title: "Crazy Tik Toks Taken Moments Before DISASTER",
        author: "SSSniperWolf",
        stats: "12M views · 1 year ago",
        time: "9:13",
      },
      {
        thumbnail: "./thumbnails/thumbnail-4.webp",
        channel: "channels/channel-4.jpeg",
        title:
          "The Simplest Math Problem No One Can Solve - Collatz Conjecture",
        author: "Veritasium",
        stats: "18M views · 4 months ago",
        time: "22:09",
      },
      {
        thumbnail:
          "https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-5.webp",
        channel: "channels/channel-5.jpeg",
        title: "Kadane's Algorithm to Maximum Sum Subarray Problem",
        author: "CS Dojo",
        stats: "519K views · 5 years ago",
        time: "11:17",
      },
      {
        thumbnail: "./thumbnails/thumbnail-6.webp",
        channel: "channels/channel-6.jpeg",
        title: "Anything You Can Fit In The Circle I’ll Pay For",
        author: "MBeast",
        stats: "141M views · 1 year ago",
        time: "19:59",
      },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }
  componentDidMount() {
    console.log("App - Mounted");
  }

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Videos videos={this.state.videos} />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
