import React, { useState, useRef } from 'react'
import styles from './MusicApp.module.css'
import { TiMediaRewindOutline, TiMediaFastForwardOutline, TiMediaPauseOutline, TiMediaPlayOutline } from "react-icons/ti";
import { TiArrowRepeat, TiArrowShuffle, TiHeartFullOutline, TiVolumeMute, TiVolumeDown, TiVolumeUp } from "react-icons/ti";

const songs = [
  {
    id: 0,
    title: 'Shape of you',
    artist: 'ED Sheeran',
    imageUrl: '/music/image/ShapeOfYou.jpg',
    audioUrl: '/music/mp3/ShapeOfYou_EdSheeran.mp3',
    duration: 290,
  },
  {
    id: 1,
    title: 'Closer',
    artist: 'smocker',
    imageUrl: '/music/image/closer.jpg',
    audioUrl: '/music/mp3/The Chainsmokers  Closer.mp3',
    duration: 261,
  },
  {
    id: 2,
    title: 'Perject',
    artist: 'ED Sheeran',
    imageUrl: '/music/image/perfect.jpg',
    audioUrl: '/music/mp3/Ed Sheeran  Perfect.mp3',
    duration: 279,
  },
  {
    id: 3,
    title: 'Let me down',
    artist: 'Alec',
    imageUrl: '/music/image/Letmedown.jpg',
    audioUrl: '/music/mp3/Alec Benjamin  Let Me Down Slowly.mp3',
    duration: 177,
  },
  {
    id: 4,
    title: 'Let her go',
    artist: 'Passenger',
    imageUrl: '/music/image/LetHerGo.jpg',
    audioUrl: '/music/mp3/Passenger  Let Her Go.mp3',
    duration: 274,
  },
  {
    id: 5,
    title: 'See you again',
    artist: 'Charlie Puth',
    imageUrl: '/music/image/SeeYouAgain.jpg',
    audioUrl: '/music/mp3/See You Again ft Charlie Puth.mp3',
    duration: 236,
  },
  {
    id: 6,
    title: 'Nước ngoài',
    artist: 'Ha Anh Tuan',
    imageUrl: '/music/image/NuocNgoai.jpg',
    audioUrl: '/music/mp3/Nước Ngoài  Hà Anh Tuấn.mp3',
    duration: 264,
  },
  {
    id: 7,
    title: 'Dệt tầm gai/con cò',
    artist: 'Tùng Dương Ft Hà Trần',
    imageUrl: '/music/image/DetTamGai.jpg',
    audioUrl: '/music/mp3/Dệt Tầm GaiCon Cò  Tùng Dương Ft Hà Trần.mp3',
    duration: 404,
  },
];

export default function PlayMusic() {
  //bài hát đang phát
  const [songIndex, setSongIndex] = useState(0);
  //Trạng thái play/stop
  const [status, setStatus] = useState('stop');
  //Thời gian bài hát
  const [currentValue, setCurrentValue] = useState(0);
  //Cho phép truy cập các thuộc tính thẻ được gắn refPlayer
  const refPlayer = useRef(null);
  //setLike để render lại nút thả tym chứ chưa clear vấn đề tại sao setLikeLists k render lại
  const [like, setLike] = useState('false')
  //Danh sách thích theo thứ tự index
  const [likeLists, setLikeLists] = useState(() => {
    let array = [];
    for (let i = 0; i < songs.length; i++) { array[i] = 'false' }
    return array;
  });
  const [isRandomSong, setRanDomSong] = useState(false);

  const back = () => {
    (songIndex === 0) ? setSongIndex(songs.length - 1) : setSongIndex(songIndex - 1);
    setStatus('pause');
  };
  const play = () => {
    if (status !== 'play') {
      refPlayer.current?.play();
      refPlayer.current.autoplay = true;
      console.log(refPlayer.current.autoplay)
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
    setStatus('play');
    setSongIndex(index)
  }
  const clickLike = (index) => {
    const newList = likeLists;
    likeLists[index] === 'true' ? newList[index] = 'false' : newList[index] = 'true';
    // console.log(likeLists)
    setLikeLists(newList)
    setLike(newList[index])
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
            // setLike(likeLists[index]);
            return (
              <div key={index}
                className={[styles.container, songIndex === index ? styles.songPlaying : ''].join(' ')}>
                <div className={styles.id}><h4>{song.id}</h4></div>
                <div className={styles.imageUrl}> <img src={song.imageUrl} alt='' /></div>
                <div className={styles.title}
                  onClick={() => { clickSongItem(index) }}>
                  <h4>{song.title}</h4></div>
                <div className={styles.artist}>{song.artist}</div>
                <div className={styles.duration}>{`${Math.floor(song.duration / 60)}:${song.duration % 60}s`}</div>
                <div className={songIndex === index ? styles.tym2 : styles.tym}>
                  <button
                    style={{ color: likeLists[index] === 'true' ? 'red' : '#abb6b6' }}
                    onClick={() => clickLike(index)}
                  ><TiHeartFullOutline /></button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Play Music */}
      <div className={styles.playmusic}>
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