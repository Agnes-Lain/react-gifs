import React from "react";

class Gif extends React.Component {
  handleClick = () => {
    this.props.select(this.props.id);
  }

  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
