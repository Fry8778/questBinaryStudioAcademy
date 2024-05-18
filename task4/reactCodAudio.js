import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import zo from 'some-library'; // Подставьте нужную библиотеку

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);

  const handleRateChange = useCallback((rate) => {
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;

    const handlePlaybackRateChange = (e) => {
      if (e.target.playbackRate === 0.25) {
        // Ваши действия при изменении скорости воспроизведения
        setIsPlaying(true);
      }
    };

    if (audioElement) {
      audioElement.addEventListener('ratechange', handlePlaybackRateChange);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('ratechange', handlePlaybackRateChange);
        audioElement.pause();
      }
      setIsPlaying(false);
    };
  }, []);

  return (
    <zo.Fragment>
      <h2>Change Audio Playback Rate</h2>
      <p>Use the buttons to change the playback rate of the audio:</p>
      <audio id="myAudio" ref={audioRef} controls>
        <source src="https://quest.binary-studio.com/static/media/broadcast.8e762dc2c43d4e1cf790.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div>
        {[0.2, 0.3, 0.4, 0.45, 0.5, 0.75, 1].map((rate) => (
          <button key={rate} onClick={() => handleRateChange(rate)}>
            {rate}x
          </button>
        ))}
      </div>
      <div>
        <button onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </zo.Fragment>
  );
};

export default AudioPlayer;
