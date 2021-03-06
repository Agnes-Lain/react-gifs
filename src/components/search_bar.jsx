import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: ""};
  }

  // componentWillMount() {
  //   console.log("SEARCH_BAR WILL MOUNT");
  // }

  // componentDidMount() {
  //   console.log("SEARCH_BAR DID MOUNT");
  // }

  handleChange = (event) => {
    this.setState({
      term: event.target.value
    });
    this.props.search(event.target.value);
  }

  render() {
    return (
      <input
        value={this.state.term}
        type="text"
        className="form-control form-search"
        onChange={this.handleChange} />
    );
  }
}

export default SearchBar;
