import './App.css';
import React from 'react';
import SearchBar from './jsModules/SearchBar.';
import SearchResults from './jsModules/SearchResults';
import Playlist from './jsModules/Playlist';
import data from './data';

function App() {

  const [spotifyTracks, setSpotifyTracks] = React.useState(data);
  const [playlistTracks, setPlaylistTracks] = React.useState([]);

  function addToPlaylist(event, songId){

  }

  return (
    <>
    <main>
      <header></header>
      <SearchBar />
      <div>
        <SearchResults spotifyTracks={spotifyTracks} addToPlaylist={addToPlaylist}/>
        <Playlist playlistTracks={playlistTracks}/>
      </div>
    </main>
    </>
  );
}

export default App;
