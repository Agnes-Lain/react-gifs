import React from "react";
import Gif from "./gif";

// class GifList extends React.Component {

//   renderList = () => {
//     return this.props.gifs.map(gif =>
//       <Gif id={gif.id} key={gif.id} select={this.props.selectId} />
//     );
//   };

//   render() {
//     return (
//       <div className="gif-list">
//         {this.renderList()}
//       </div>
//     );
//   }
// }

const GifList = ({ gifs, selectId }) => {
  return (
    <div className="gif-list">
      {gifs.map(({ id }) => <Gif id={id} key={id} select={selectId} />)}
    </div>
  );
};

export default GifList;
