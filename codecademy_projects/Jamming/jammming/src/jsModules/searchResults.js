import React from 'react';
import Track from './Track';

function SearchResults(props){
    return (
        <div>
            {props.spotifyTracks.map((song)=> 
                <Track 
                name={song.name} 
                artist={song.artist} 
                album={song.album} 
                key={song.id} 
                id={song.id}
                addToPlaylist={props.addToPlaylist}
                />)}
        </div>
    )
}

export default SearchResults;