import './App.css';
import React from 'react';
import SearchBar from './jsModules/SearchBar';
import SearchResults from './jsModules/SearchResults';
import Playlist from './jsModules/Playlist';
import data from './data';

function App() {

  const [spotifyTracks, setSpotifyTracks] = React.useState(data);
  const [playlistTracks, setPlaylistTracks] = React.useState([]);

  function addToPlaylist(event, songId){
    event.preventDefault();
    let addedTrack;
    for(let i = 0; i < spotifyTracks.length; i++){
      if(spotifyTracks[i].id === songId){
        addedTrack = spotifyTracks[i];
      }
    }
    for(let j = 0; j < playlistTracks.length; j++){
      if(addedTrack.id === playlistTracks[j].id){
        return
      }
    }
    setPlaylistTracks((prevTracks)=> [...prevTracks, addedTrack]);
  }

  function removeFromPlaylist(event, songId){
    event.preventDefault();

    setPlaylistTracks((prevTracks)=> prevTracks.filter((song)=> song.id !== songId))
  }

  return (
    <>
    <main>
      <header>
        <h1>Jammming</h1>
        <h2>Spotify Playlist Creator</h2>
      </header>
      <div className='container'>
        <div className='searchResults'>
          <SearchBar />
          <SearchResults spotifyTracks={spotifyTracks} addToPlaylist={addToPlaylist}/>
        </div> 
        <Playlist playlistTracks={playlistTracks} removeFromPlaylist={removeFromPlaylist}/>
      </div>
    </main>
    </>
  );
}

export default App;
