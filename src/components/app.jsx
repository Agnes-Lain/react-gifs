import React from 'react';
import giphy from "giphy-api";
import SearchBar from './search_bar';
import Gif from "./gif";
import GifList from "./gif_list";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "2A75RyXVzzSI2bx4Gj"
    };
  }

  search = (query) => {
    // to do: gify-api fetch
    giphy("UKoCfpL2XndvUExoEX5cC2PcBeD0syxF").search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      // Res contains gif data!
      this.setState({
        gifs: res.data
      });
    });
  }

  selectId = (gifId) => {
    this.setState({
      selectedGifId: gifId
    });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectId={this.selectId} />
        </div>
      </div>
    );
  }
}

export default App;
