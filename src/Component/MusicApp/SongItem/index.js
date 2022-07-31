import React from 'react'
import styles from './SongItem.module.css';
import { TiHeartOutline} from "react-icons/ti";

function SongItem(
    {songId,
      title,
      artist,
      imageUrl,
      duration,}
) {
  return (
    <div className={styles.container}>
        <div className={styles.id}>{songId}</div>
        <div className={styles.imageUrl}>{imageUrl} </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.artist}>{artist}</div>
        <div className={styles.duration}>{duration}</div>
        <div className={styles.tym}><button><TiHeartOutline/></button></div>
    </div>
  )
}

export default SongItem