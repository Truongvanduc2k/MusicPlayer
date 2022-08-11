import React, { useState, useRef } from 'react'
import styles from './MusicApp.module.css'
import { TiMediaRewindOutline, TiMediaFastForwardOutline, TiMediaPauseOutline, TiMediaPlayOutline } from "react-icons/ti";
import { TiArrowRepeat, TiArrowShuffle, TiVolumeMute, TiVolumeDown, TiVolumeUp } from "react-icons/ti";
import SongItem from './SongItem';
import songs from './Data';

export default function PlayMusic() {
  //bài hát đang phát
  const [songIndex, setSongIndex] = useState(0);
  //Trạng thái play/stop
  const [status, setStatus] = useState('stop');
  //Thời gian bài hát
  const [currentValue, setCurrentValue] = useState(0);
  //Cho phép truy cập các thuộc tính thẻ được gắn refPlayer
  const refPlayer = useRef(null);
  //Danh sách thích theo thứ tự index
  const [likeLists, setLikeLists] = useState(() => {
    let array = [];
    for (let i = 0; i < songs.length; i++) { array[i] = 'false' }
    return array;
  });
  const [isRandomSong, setRanDomSong] = useState(false);

  const back = () => {
    (songIndex === 0) ? setSongIndex(songs.length - 1) : setSongIndex(songIndex - 1);
    setStatus('play');
  };
  const play = () => {
    if (status !== 'play') {
      refPlayer.current?.play();
      refPlayer.current.autoplay = true;
      setStatus('play');
    } else {
      refPlayer.current?.pause();
      setStatus('pause');
    }
  };
  const next = () => {
    if (isRandomSong) { setSongIndex(Math.floor(Math.random() * songs.length)); }
    else { (songIndex + 1 < songs.length) ? setSongIndex(songIndex + 1) : setSongIndex(0); }
    setStatus('play');
  };
  const clickSongItem = (index) => {
    refPlayer.current.autoplay = true;
    setStatus('play');
    setSongIndex(index)
  }
  const clickLike = (index) => {
    const newList = [...likeLists];
    likeLists[index] === 'true' ? newList[index] = 'false' : newList[index] = 'true';
    setLikeLists(newList)
  }
  // Chỉnh volume
  const volumeMute = () => {
    refPlayer.current.volume = 0;
  }
  const volumeDown = () => {
    refPlayer.current.volume -= 0.1;
  }
  const volumeUp = () => {
    refPlayer.current.volume += 0.1;
  }
  return (
    <div className={styles.appmusic}>
      {/* Danh sách bài hát */}
      <div className={styles.listsongs}>
        <div>
          {songs.map((song, index) => {
            return (
              <SongItem
                song={song}
                songplaying={songIndex}
                isLike={likeLists[index]}
                clickSongItem={() => clickSongItem(index)}
                clickLike={() => clickLike(index)
                } />
            );
          })}
        </div>
      </div>
      {/* Play Music */}
      <div className={styles.playmusic}>
        {/* Disc  */}
        <div className={styles.disc_container}>
          <div className={[styles.disc, status === 'play' ? styles.disc_rotation : ''].join(' ')}
            style={{ backgroundImage: `url(${songs[songIndex].imageUrl})`, }}>
            <div className={styles.disc_center}></div>
          </div>
          <div><h2>{songs[songIndex].title}</h2></div>
          <div>{songs[songIndex].artist}</div>
        </div>
        <audio
          style={{ display: 'none' }}
          ref={refPlayer}
          src={songs[songIndex].audioUrl}
          controls
          onEnded={next}
          onTimeUpdate={(e) => {
            setCurrentValue(e.target.currentTime);
          }}
        />
        <input
          step={1}
          type='range'
          min={0}
          max={songs[songIndex].duration}
          value={currentValue.toFixed(0)}
          className={styles.slider}
          id='myRange'
          onInput={(e) => {
            console.log(typeof e.target.value);
            setCurrentValue(parseInt(e.target.value));
            refPlayer.current.currentTime = parseInt(e.target.value);
          }}
        />
        <div className={styles.timeline}>
          <div>{`${Math.floor(currentValue / 60)}:${Math.floor(currentValue % 60)}s`}</div>
          <div>{`${Math.floor(songs[songIndex].duration / 60)}:${songs[songIndex].duration % 60}s`}</div>
        </div>
        <div className={styles.buttonsContainer}>
          {/* Chế độ phát */}
          <button className={styles.smallbutton} onClick={() => setRanDomSong(!isRandomSong)}>
            {isRandomSong ? <TiArrowShuffle /> : <TiArrowRepeat />}
          </button>
          {/* Controls */}
          <button className={styles.buttonback} onClick={back}>
            <TiMediaRewindOutline />
          </button>
          <button className={styles.buttonplay} onClick={play}>
            {status !== 'play' ? <TiMediaPlayOutline /> : <TiMediaPauseOutline />}
          </button>
          <button className={styles.buttonnext} onClick={next}>
            <TiMediaFastForwardOutline />
          </button>
          {/* Volume */}
          <div className={styles.volume}>
            <button className={styles.smallbutton} onClick={volumeMute}> <TiVolumeMute /></button>
            <button className={styles.smallbutton} onClick={volumeDown}> <TiVolumeDown /></button>
            <button className={styles.smallbutton} onClick={volumeUp}> <TiVolumeUp /></button>
          </div>

        </div>


      </div>
    </div>
  );
}