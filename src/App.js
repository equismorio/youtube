import React, { Component } from "react";
import NavBar from "./components/navbar";
import Videos from "./components/videos";
import "./general.css";
import "./header.css";
import results from "./response2";

class App extends Component {
  state = {
    videos: results,
    // {
    //   items: [
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "4XYVgeIhPl3FdurY0fI-dLi7OIM",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "l-v6oKJcms8",
    //       },
    //       snippet: {
    //         publishedAt: "2020-02-06T15:06:50Z",
    //         channelId: "UCQMjmxloOMwuXVWf-kxamoQ",
    //         title:
    //           "NEISD District 8th Grade Championship Game Highlights. Lopez MS beat Tex Hill 52-46.",
    //         description:
    //           "Tim#0(in light blue shoes). Lopez Middle School 8th Grade A Team are the Champions!!!",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/l-v6oKJcms8/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/l-v6oKJcms8/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/l-v6oKJcms8/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i.ytimg.com/vi/l-v6oKJcms8/sddefault.jpg",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i.ytimg.com/vi/l-v6oKJcms8/maxresdefault.jpg",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "Edgar Quismorio",
    //         liveBroadcastContent: "none",
    //         publishTime: "2020-02-06T15:06:50Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "DJEn6sgzdhP9OCs2yHzhhzqGZdU",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "gDCaLi3TqgU",
    //       },
    //       snippet: {
    //         publishedAt: "2020-02-06T15:01:49Z",
    //         channelId: "UCQMjmxloOMwuXVWf-kxamoQ",
    //         title:
    //           "NEISD 2019-2020 End of Season Tournament Game 1 Highlights.",
    //         description:
    //           "Lopez Middle School Boys Team A beat Harris MD (59-41). Tim#0 with 22 points, 2 rebounds, 2 steals, 2 assists, 1 block! 4 for 4 from 3 point line! First 13 of 16 team points in 1st quarter! Way to go Tim!",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/gDCaLi3TqgU/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/gDCaLi3TqgU/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/gDCaLi3TqgU/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i.ytimg.com/vi/gDCaLi3TqgU/sddefault.jpg",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i.ytimg.com/vi/gDCaLi3TqgU/maxresdefault.jpg",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "Edgar Quismorio",
    //         liveBroadcastContent: "none",
    //         publishTime: "2020-02-06T15:01:49Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "6AxUMhMgto1DmzSZnyEkr_tb4h8",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "ijnDU-lbmBA",
    //       },
    //       snippet: {
    //         publishedAt: "2018-03-11T04:22:34Z",
    //         channelId: "UCQMjmxloOMwuXVWf-kxamoQ",
    //         title: "Diamondbacks vs Cobras Finals",
    //         description:
    //           "Championship game vs Cobras on March 10, 2018. Timmy with 13 points. Cobras win 54-43.",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/ijnDU-lbmBA/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/ijnDU-lbmBA/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/ijnDU-lbmBA/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i.ytimg.com/vi/ijnDU-lbmBA/sddefault.jpg",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i.ytimg.com/vi/ijnDU-lbmBA/maxresdefault.jpg",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "Edgar Quismorio",
    //         liveBroadcastContent: "none",
    //         publishTime: "2018-03-11T04:22:34Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "exuF61AIHIgM2tpJjes3HB91Uo0",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "2jyS1-kq7Q8",
    //       },
    //       snippet: {
    //         publishedAt: "2018-03-06T04:04:39Z",
    //         channelId: "UCQMjmxloOMwuXVWf-kxamoQ",
    //         title: "Diamonbacks vs Wolves First round elimination",
    //         description:
    //           "Diamondbacks started the tournament with only 6 players. 3 starters  were not able to make first game and another player was sick. Dbacks got to a deep hole sometime in the 3rd quarter trailing 11 points (11 vs 22). With 5 minutes remaining Dbacks tied the game at 22-22 then tied again at 24-24. Dbacks won 31-24.",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/2jyS1-kq7Q8/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/2jyS1-kq7Q8/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/2jyS1-kq7Q8/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i.ytimg.com/vi/2jyS1-kq7Q8/sddefault.jpg",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i.ytimg.com/vi/2jyS1-kq7Q8/maxresdefault.jpg",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "Edgar Quismorio",
    //         liveBroadcastContent: "none",
    //         publishTime: "2018-03-06T04:04:39Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "UugSVk3_ot-X4veudzK3SMsZvpY",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "Sp22Ii3qymQ",
    //       },
    //       snippet: {
    //         publishedAt: "2018-02-24T21:15:39Z",
    //         channelId: "UCQMjmxloOMwuXVWf-kxamoQ",
    //         title: "12U Diamondbacks Vs Warriors",
    //         description:
    //           "Timmy's game with 12U Diamondbacks against Warriors Nation on Feb 24, 2018.",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/Sp22Ii3qymQ/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/Sp22Ii3qymQ/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/Sp22Ii3qymQ/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i.ytimg.com/vi/Sp22Ii3qymQ/sddefault.jpg",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i.ytimg.com/vi/Sp22Ii3qymQ/maxresdefault.jpg",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "Edgar Quismorio",
    //         liveBroadcastContent: "none",
    //         publishTime: "2018-02-24T21:15:39Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "NwEXHOE6xGZIufzKYKvzFr6EujA",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "9f-8pwhQDLA",
    //       },
    //       snippet: {
    //         publishedAt: "2018-02-11T23:15:08Z",
    //         channelId: "UCQMjmxloOMwuXVWf-kxamoQ",
    //         title: "12U Diamondbacks basketball vs Admirals on Feb 11, 2018.",
    //         description: "",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/9f-8pwhQDLA/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/9f-8pwhQDLA/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/9f-8pwhQDLA/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i.ytimg.com/vi/9f-8pwhQDLA/sddefault.jpg",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i.ytimg.com/vi/9f-8pwhQDLA/maxresdefault.jpg",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "Edgar Quismorio",
    //         liveBroadcastContent: "none",
    //         publishTime: "2018-02-11T23:15:08Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "Ba5ZHHqlh99Ig87dzpb38xgxz0Y",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "b4pj52I1yvE",
    //       },
    //       snippet: {
    //         publishedAt: "2018-02-04T03:43:22Z",
    //         channelId: "UCQMjmxloOMwuXVWf-kxamoQ",
    //         title: "Diamondbacks 12U basketball against Wolves on Feb 3, 2018.",
    //         description: "Timmy with 12 points. Diamondbacks won 30-10.",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/b4pj52I1yvE/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/b4pj52I1yvE/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/b4pj52I1yvE/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i.ytimg.com/vi/b4pj52I1yvE/sddefault.jpg",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i.ytimg.com/vi/b4pj52I1yvE/maxresdefault.jpg",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "Edgar Quismorio",
    //         liveBroadcastContent: "none",
    //         publishTime: "2018-02-04T03:43:22Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "-UNWW5QGoC17OBZS1Q-oe19uE6k",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "DNkZuar_z-c",
    //       },
    //       snippet: {
    //         publishedAt: "2018-01-29T05:20:42Z",
    //         channelId: "UCQMjmxloOMwuXVWf-kxamoQ",
    //         title: "Timmy’s 12U basketball game 3 with Diamondbacks.",
    //         description:
    //           "Diamondback versus Spring branch rangers on Jan 28, 2018. Diamondbacks lost 30-34. 😢",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/DNkZuar_z-c/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/DNkZuar_z-c/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/DNkZuar_z-c/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i.ytimg.com/vi/DNkZuar_z-c/sddefault.jpg",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i.ytimg.com/vi/DNkZuar_z-c/maxresdefault.jpg",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "Edgar Quismorio",
    //         liveBroadcastContent: "none",
    //         publishTime: "2018-01-29T05:20:42Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "-ukGcCyMXOcfrwkgGbrBvG87nKo",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "EwKA9h28xLI",
    //       },
    //       snippet: {
    //         publishedAt: "2018-01-15T11:05:29Z",
    //         channelId: "UCQMjmxloOMwuXVWf-kxamoQ",
    //         title: "Diamondbacks 12U Basketball team game 1 against Panthers.",
    //         description:
    //           "Timmy’s basketball game with Diamondbacks on Jan 13, 2018. Diamondbacks won 42-6. Point guard Timmy with 10 pts, 5 of 10 Field goals, 5 assists, 5 steals, 1 rebound, 0 fouls, 0 turnovers.",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/EwKA9h28xLI/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/EwKA9h28xLI/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/EwKA9h28xLI/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i.ytimg.com/vi/EwKA9h28xLI/sddefault.jpg",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i.ytimg.com/vi/EwKA9h28xLI/maxresdefault.jpg",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "Edgar Quismorio",
    //         liveBroadcastContent: "none",
    //         publishTime: "2018-01-15T11:05:29Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "WdE1yAHsEDeTlYzsB558hqZjmvE",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "HRoffC77GjI",
    //       },
    //       snippet: {
    //         publishedAt: "2017-09-27T16:40:32Z",
    //         channelId: "UCQMjmxloOMwuXVWf-kxamoQ",
    //         title: "Boomers 7th graders tournament on 9-24-2017.",
    //         description:
    //           "Timmy played with Boomers 7th graders basketball team on 9-24-2017. Boomers won all 3 games. Timmy with 9 or more points per game.",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/HRoffC77GjI/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/HRoffC77GjI/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/HRoffC77GjI/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i.ytimg.com/vi/HRoffC77GjI/sddefault.jpg",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i.ytimg.com/vi/HRoffC77GjI/maxresdefault.jpg",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "Edgar Quismorio",
    //         liveBroadcastContent: "none",
    //         publishTime: "2017-09-27T16:40:32Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "ezQUpsBEaVLTesTBonQyVv6pWho",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "9mEjpm-YV4w",
    //       },
    //       snippet: {
    //         publishedAt: "2017-06-13T19:16:19Z",
    //         channelId: "UCQMjmxloOMwuXVWf-kxamoQ",
    //         title: "SFS 11U Basketball on June 12, 2017.",
    //         description: "SFS won 32-18. Tim with 15 points",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/9mEjpm-YV4w/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/9mEjpm-YV4w/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/9mEjpm-YV4w/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i.ytimg.com/vi/9mEjpm-YV4w/sddefault.jpg",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i.ytimg.com/vi/9mEjpm-YV4w/maxresdefault.jpg",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "Edgar Quismorio",
    //         liveBroadcastContent: "none",
    //         publishTime: "2017-06-13T19:16:19Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "59aO_7aIYQsqFxabA5kTk4qQUk4",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "amnBkS_kh10",
    //       },
    //       snippet: {
    //         publishedAt: "2017-05-29T20:53:36Z",
    //         channelId: "UCQMjmxloOMwuXVWf-kxamoQ",
    //         title: "Shooting for Success with Timmy on May 26, 2017.",
    //         description: "12U Basketball. SFS wins. Timmy with 5 points.",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/amnBkS_kh10/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/amnBkS_kh10/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/amnBkS_kh10/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i.ytimg.com/vi/amnBkS_kh10/sddefault.jpg",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i.ytimg.com/vi/amnBkS_kh10/maxresdefault.jpg",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "Edgar Quismorio",
    //         liveBroadcastContent: "none",
    //         publishTime: "2017-05-29T20:53:36Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "7SFe_9YsDMqw1YMPW_62Plu6fs8",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "9Q3gJoVJBoQ",
    //       },
    //       snippet: {
    //         publishedAt: "2017-05-27T10:38:46Z",
    //         channelId: "UCQMjmxloOMwuXVWf-kxamoQ",
    //         title: "Shooting for Success vs BIAH championship game",
    //         description: "11U AAU Basketball Championship game. SFS wins!",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/9Q3gJoVJBoQ/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/9Q3gJoVJBoQ/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/9Q3gJoVJBoQ/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i.ytimg.com/vi/9Q3gJoVJBoQ/sddefault.jpg",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i.ytimg.com/vi/9Q3gJoVJBoQ/maxresdefault.jpg",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "Edgar Quismorio",
    //         liveBroadcastContent: "none",
    //         publishTime: "2017-05-27T10:38:46Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "c2zMzw0vmsSr7OALzO6VxAwBaDI",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "Km-9Q-fajoY",
    //       },
    //       snippet: {
    //         publishedAt: "2017-02-11T06:38:53Z",
    //         channelId: "UCQMjmxloOMwuXVWf-kxamoQ",
    //         title: "Tim's game with SFS on Feb 10, 2017.",
    //         description: "Youth basketball, 11U, 11 years old, AAU",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/Km-9Q-fajoY/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/Km-9Q-fajoY/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/Km-9Q-fajoY/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i.ytimg.com/vi/Km-9Q-fajoY/sddefault.jpg",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i.ytimg.com/vi/Km-9Q-fajoY/maxresdefault.jpg",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "Edgar Quismorio",
    //         liveBroadcastContent: "none",
    //         publishTime: "2017-02-11T06:38:53Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "lqjLAPWpOeA8sETnoku9LdjDB8I",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "SSCVtTjLVAk",
    //       },
    //       snippet: {
    //         publishedAt: "2017-02-11T05:40:04Z",
    //         channelId: "UCQMjmxloOMwuXVWf-kxamoQ",
    //         title: "Tim's coast to coast drive with a Eurostep finish.",
    //         description:
    //           "Basketball, eurostep, euro step, 11 year old, youth basketball.",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/SSCVtTjLVAk/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/SSCVtTjLVAk/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/SSCVtTjLVAk/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i.ytimg.com/vi/SSCVtTjLVAk/sddefault.jpg",
    //             width: 640,
    //             height: 480,
    //           },
    //         },
    //         channelTitle: "Edgar Quismorio",
    //         liveBroadcastContent: "none",
    //         publishTime: "2017-02-11T05:40:04Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "nbT4lXuUTLQcdy-GRC17e6U09Hg",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "27fOn212Qxs",
    //       },
    //       snippet: {
    //         publishedAt: "2017-02-10T11:16:09Z",
    //         channelId: "UCQMjmxloOMwuXVWf-kxamoQ",
    //         title: "Timmy's game with SFS on Jan 27, 2017.",
    //         description: "",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/27fOn212Qxs/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/27fOn212Qxs/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/27fOn212Qxs/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i.ytimg.com/vi/27fOn212Qxs/sddefault.jpg",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i.ytimg.com/vi/27fOn212Qxs/maxresdefault.jpg",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "Edgar Quismorio",
    //         liveBroadcastContent: "none",
    //         publishTime: "2017-02-10T11:16:09Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "rt_e6RSL0EcKFVP4MtQCD_jYzDQ",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "yLExft-6G8k",
    //       },
    //       snippet: {
    //         publishedAt: "2017-02-04T18:35:38Z",
    //         channelId: "UCQMjmxloOMwuXVWf-kxamoQ",
    //         title: "Timmy's game 1 with Shooting For Success.",
    //         description:
    //           "SFS won 44-22. Timmy with 6 pts; FG:3/12; AST:6; REB:5; STL:3",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/yLExft-6G8k/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/yLExft-6G8k/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/yLExft-6G8k/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i.ytimg.com/vi/yLExft-6G8k/sddefault.jpg",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i.ytimg.com/vi/yLExft-6G8k/maxresdefault.jpg",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "Edgar Quismorio",
    //         liveBroadcastContent: "none",
    //         publishTime: "2017-02-04T18:35:38Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "tekbpkR5lO8NXvDL0sQtq31JxEU",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "6CMYd_veZyk",
    //       },
    //       snippet: {
    //         publishedAt: "2015-12-08T23:10:44Z",
    //         channelId: "UCQMjmxloOMwuXVWf-kxamoQ",
    //         title: "Championship game: Boomer vs SA Mules (12-5-15)",
    //         description: "Final score: 52-40 Boomers!",
    //         thumbnails: {
    //           default: {
    //             url: "https://i9.ytimg.com/vi/6CMYd_veZyk/default.jpg?sqp=COS8i54G&rs=AOn4CLBo-72-MW7mrRiBdKnMQNM6CTcGUA",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i9.ytimg.com/vi/6CMYd_veZyk/mqdefault.jpg?sqp=COS8i54G&rs=AOn4CLA1xX_eEECY91dnJv_TwEhFOrsrDQ",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i9.ytimg.com/vi/6CMYd_veZyk/hqdefault.jpg?sqp=COS8i54G&rs=AOn4CLAeSCOUryKWNqlvBrhyrtlFGio84Q",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i9.ytimg.com/vi/6CMYd_veZyk/sddefault.jpg?sqp=COS8i54G&rs=AOn4CLBCPfbXdgvDnogfYSI80nzI9BSVqA",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i9.ytimg.com/vi/6CMYd_veZyk/maxresdefault.jpg?sqp=COS8i54G&rs=AOn4CLChwV5oWI8HYif-N4SYTMOvlu5kRQ",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "Edgar Quismorio",
    //         liveBroadcastContent: "none",
    //         publishTime: "2015-12-08T23:10:44Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "TcsHj26WWj3eDgF15emd6dBOzNs",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "h8oRklnBJEs",
    //       },
    //       snippet: {
    //         publishedAt: "2015-12-03T03:39:41Z",
    //         channelId: "UCQMjmxloOMwuXVWf-kxamoQ",
    //         title: "Timmy's skill training 2015",
    //         description:
    //           "Timmy's basketball skills training with I'm possible from July 6 to Nov 10, 2015.",
    //         thumbnails: {
    //           default: {
    //             url: "https://i9.ytimg.com/vi/h8oRklnBJEs/default.jpg?sqp=COS8i54G&rs=AOn4CLAURIrrPPyewsRrphD-fntX0rp9hw",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i9.ytimg.com/vi/h8oRklnBJEs/mqdefault.jpg?sqp=COS8i54G&rs=AOn4CLDh0sDwIlyRVfghHCpYi7P2a-ISag",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i9.ytimg.com/vi/h8oRklnBJEs/hqdefault.jpg?sqp=COS8i54G&rs=AOn4CLAKWJGTsREJloB0LSzzQ3y5revZSQ",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i9.ytimg.com/vi/h8oRklnBJEs/sddefault.jpg?sqp=COS8i54G&rs=AOn4CLAGcPZh51DJ2NWksp4Tw_ohLresKg",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i9.ytimg.com/vi/h8oRklnBJEs/maxresdefault.jpg?sqp=COS8i54G&rs=AOn4CLA4Hc-alXl99Yq4vX7yg7d8AQq2mQ",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "Edgar Quismorio",
    //         liveBroadcastContent: "none",
    //         publishTime: "2015-12-03T03:39:41Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "iu-G-sDBEq4LrZf1qLIZKH8e_J8",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "sGnQ2PBdfSQ",
    //       },
    //       snippet: {
    //         publishedAt: "2014-10-31T03:21:29Z",
    //         channelId: "UCQMjmxloOMwuXVWf-kxamoQ",
    //         title: "Timmy's Fall 2014 basketball league.",
    //         description:
    //           "Timmy's basketball video clips from his Fall 2014 basketball league's game. They ended receiiving silver.",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/sGnQ2PBdfSQ/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/sGnQ2PBdfSQ/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/sGnQ2PBdfSQ/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Edgar Quismorio",
    //         liveBroadcastContent: "none",
    //         publishTime: "2014-10-31T03:21:29Z",
    //       },
    //     },
    //   ],
    // },

    // videos: [
    //   {
    //     thumbnail: "thumbnails/thumbnail-1.webp",
    //     channel: "channels/channel-1.jpeg",
    //     title: "Talking Tech and AI with Google CEO Sundar Pichai!",
    //     author: "Marques Brownlee",
    //     stats: "3.4M views · 6 months ago",
    //     time: "14:20",
    //   },
    //   {
    //     thumbnail:
    //       "https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-2.webp",
    //     // thumbnail: "thumbnails/thumbnail-2.webp",
    //     channel: "channels/channel-2.jpeg",
    //     title: "Try Not To Laugh Challenge #9",
    //     author: "Markiplier",
    //     stats: "19M views · 4 years ago",
    //     time: "8:22",
    //   },
    //   {
    //     thumbnail: "./thumbnails/thumbnail-3.webp",
    //     channel: "channels/channel-3.jpeg",
    //     title: "Crazy Tik Toks Taken Moments Before DISASTER",
    //     author: "SSSniperWolf",
    //     stats: "12M views · 1 year ago",
    //     time: "9:13",
    //   },
    //   {
    //     thumbnail: "./thumbnails/thumbnail-4.webp",
    //     channel: "channels/channel-4.jpeg",
    //     title:
    //       "The Simplest Math Problem No One Can Solve - Collatz Conjecture",
    //     author: "Veritasium",
    //     stats: "18M views · 4 months ago",
    //     time: "22:09",
    //   },
    //   {
    //     thumbnail:
    //       "https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-5.webp",
    //     channel: "channels/channel-5.jpeg",
    //     title: "Kadane's Algorithm to Maximum Sum Subarray Problem",
    //     author: "CS Dojo",
    //     stats: "519K views · 5 years ago",
    //     time: "11:17",
    //   },
    //   {
    //     thumbnail: "./thumbnails/thumbnail-6.webp",
    //     channel: "channels/channel-6.jpeg",
    //     title: "Anything You Can Fit In The Circle I’ll Pay For",
    //     author: "MBeast",
    //     stats: "141M views · 1 year ago",
    //     time: "19:59",
    //   },
    // ],
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
