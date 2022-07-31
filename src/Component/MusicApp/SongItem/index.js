import React from 'react'
import styles from './SongItem.module.css';
import { TiHeartOutline} from "react-icons/ti";

function SongItem(
    {songId='STT',
      title='Tên bài hát',
      artist='tác giả',
      imageUrl='link ảnh',
      duration='Thời gian',
      clickNewSong,
      clickLike,
      clickSongItem,
    }) {
  return (
    <div className={styles.container}>
        <div className={styles.id}><h4>{songId}</h4></div>
        <div className={styles.imageUrl}>{imageUrl} </div>
        <div className={styles.title} onClick={clickSongItem}>{title}</div>
        <div className={styles.artist}>{artist}</div>
        <div className={styles.duration}>{duration}</div>
        <div className={styles.tym} onClick={clickLike}><button><TiHeartOutline/></button></div>
    </div>
  )
}

export default SongItem