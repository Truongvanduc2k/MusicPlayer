import React from 'react'
import styles from './SongItem.module.css';
import { TiHeartOutline} from "react-icons/ti";

function SongItem(
    { song,
      songplaying,
      isLike,
      clickLike,
      clickSongItem,
    }) {
  return (
    <div className={styles.container}>
        <div className={styles.id}><h4>{song.id}</h4></div>
        <div className={styles.imageUrl}>{song.imageUrl} </div>
        <div className={styles.title} onClick={clickSongItem}>{song.title}</div>
        <div className={styles.artist}>{song.artist}</div>
        <div className={styles.duration}>{song.duration}</div>
        <div className={styles.tym} onClick={clickLike}><button><TiHeartOutline/></button></div>
    </div>
  )
}

export default SongItem