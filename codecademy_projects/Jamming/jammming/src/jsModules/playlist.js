import React from 'react';
import Track from './Track';
import Styles from '../cssModules/playlist.module.css'

function Playlist(props){

    const [playlistName, setPlaylistName] = React.useState("");

    function handleNameChange(event){
        setPlaylistName(event.target.value)
    }

    function handleSubmit(){

    }

    return (
        <div className={Styles.playlist}>
            <form>
                <input name="name" type="text" placeholder="Name your playlist" onChange={handleNameChange}/>
            </form>
            {props.playlistTracks.map((song)=> 
                <Track 
                name={song.name} 
                artist={song.artist} 
                album={song.album} 
                key={song.id} 
                id={song.id}
                removeFromPlaylist={props.removeFromPlaylist}
                />)}
            <button className={Styles.saver} onClick={handleSubmit}>Save to Spotify</button>
        </div>
    )
}

export default Playlist;