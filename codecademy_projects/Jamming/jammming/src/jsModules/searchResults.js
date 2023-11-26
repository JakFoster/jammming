import React from 'react';
import Track from './Track';
import Styles from '../cssModules/searchResults.module.css'

function SearchResults(props){
    return (
        <div className={Styles.container}>
            {props.spotifyTracks.map((song)=> 
                <Track 
                className={Styles.track}
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