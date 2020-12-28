import React from "react";

class Gif extends React.Component {
  render() {
    const src = "https://media0.giphy.com/media/chVRlpAL9RTPvS1b46/giphy.gif?cid=ecf05e47953ce2389e1735d87401e8177e74fe7ae809e267&rid=giphy.gif"
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;
