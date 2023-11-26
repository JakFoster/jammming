import React from 'react';
import Styles from '../cssModules/track.module.css'

function Track(props){
    return (
        <div className={Styles.containertrack}>
            <div className={Styles.info}>
                <p className={Styles.songname}>{props.name}</p>
                <div className={Styles.details}>
                    <p>{props.artist}</p>
                    <p>|</p>
                    <p>{props.album}</p>
                </div>
            </div>
            {props.addToPlaylist ? <button className={Styles.btnPlus} onClick={(event)=> props.addToPlaylist(event, props.id)}>+</button> :
            <button className={Styles.btnMinus}  onClick={(event)=> props.removeFromPlaylist(event, props.id)}>-</button>}
        </div>
    )
}

export default Track;