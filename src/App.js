import React from "react";
import NavBar from "./components/navbar";
import Videos from "./components/videos";
import Upload from "./components/upload";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./general.css";
import "./header.css";
const moment = require("moment");
require("moment-precise-range-plugin");
const results = require("./response.json");
const details = require("./contentDetails.json");

const App = () => {
  const [videos, setVideos] = useState(results);
  const [sortDescending, setSortDescending] = useState(true);
  // const [reset, setReset] = useState(false);
  let counter = 1;
  videos.items.map(function (video) {
    let videoId = video.id.videoId;
    for (var i = 0; i < details.items.length; i++) {
      if (details.items[i].id === videoId) {
        video["time"] = moment
          .utc(
            moment
              .duration(details.items[i].contentDetails.duration)
              .asMilliseconds()
          )
          .format("HH:mm");
      }
    }
    return true;
  });

  useEffect(() => {
    console.log("useEffect ran # " + counter++);
  });
  const handleSort = () => {
    console.log("handleSort executed... ");
    const betamaxs = videos;
    if (sortDescending) {
      betamaxs.items.sort((a, b) =>
        a.snippet.publishedAt > b.snippet.publishedAt ? 1 : -1
      );
      setSortDescending(false);
      // this.setState({ sortDescending: false });
    } else {
      betamaxs.items.sort((a, b) =>
        a.snippet.publishedAt < b.snippet.publishedAt ? 1 : -1
      );
      setSortDescending(true);
      // this.setState({ sortDescending: true });
    }
    // setSortDescending(sortDescending ? sortDescending : !sortDescending);
    setVideos(betamaxs);
    // setReset(false);
  };
  const handleInput = (input) => {
    // if (!input) return;
    console.log("InputValue from NavBar: " + input);
    let betamaxs = {};
    // let videos = {};
    betamaxs.items = videos.items.filter((video) => {
      return video.snippet.title.toLowerCase().includes(input.toLowerCase());
    });
    setVideos(betamaxs);
    console.log("Count of videos :" + videos.length);
  };
  const handleReset = () => {
    console.log(
      "handleReset executed... results count =" + results.items.length
    );
    // setReset(true);
    setVideos(results);
  };

  return (
    <React.Fragment>
      <Router>
        <NavBar
          onSort={handleSort}
          onInput={handleInput}
          onReset={handleReset}
          totalVideos={videos.items.length}
          // seachValue={searchValue}
        />
        <main className="container">
          <Switch>
            <Route exact path="/">
              <Videos videos={videos} />
            </Route>
            <Route exact path="/upload">
              <Upload />
            </Route>
          </Switch>
        </main>
      </Router>
    </React.Fragment>
  );
};
export default App;
