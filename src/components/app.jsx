import React from 'react';
import SearchBar from './search_bar';
import Gif from "./gif";
import GifList from "./gif_list";

function App () {
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif />
        </div>
      </div>
      <div className="right-scene" />
      <GifList />
    </div>
  );
}

export default App;
