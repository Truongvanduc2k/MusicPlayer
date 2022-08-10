import React from 'react'
import styles from './SongItem.module.css';
import { TiHeartFullOutline } from "react-icons/ti";

function SongItem(
  {
    song,
    songplaying,
    isLike,
    clickLike,
    clickSongItem,
  }) {
  return (
    <div className={[styles.container, songplaying === song.id ? styles.songPlaying : ''].join(' ')}>
      <div className={styles.id}><h4>{song.id}</h4></div>
      <div className={styles.imageUrl}><img src={song.imageUrl} alt='' /></div>
      <div className={styles.title} onClick={clickSongItem}>{song.title}</div>
      <div className={styles.artist}>{song.artist}</div>
      <div className={styles.duration}>{`${Math.floor(song.duration / 60)}:${song.duration % 60}s`}</div>
      <div className={songplaying === song.id ? styles.tym2 : styles.tym}
        style={{ color: isLike === 'true' ? 'red' : '#abb6b6' }}
        onClick={clickLike}><button><TiHeartFullOutline /></button></div>
    </div>
  )
}

export default SongItem