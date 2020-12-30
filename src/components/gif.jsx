import React from "react";

class Gif extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // dont call rendre if props.id isn't change
    return nextProps.id !== this.props.id;
  }

  handleClick = () => {
    if (this.props.select) {
      this.props.select(this.props.id);
    }
  }

  render() {
    const { id } = this.props;
    if (!id) {
      return null;
    }

    const src = `https://media1.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
