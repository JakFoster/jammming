import React from 'react';

function Track(props){
    return (
        <div>
            <div>
                <p>{props.name}</p>
                <div>
                    <p>{props.artist}</p>
                    <p>{props.album}</p>
                </div>
            </div>
            <div>
                <button onClick={(event)=> props.addToPlaylist(event, props.id)}>+</button>
            </div>
        </div>
    )
}

export default Track;