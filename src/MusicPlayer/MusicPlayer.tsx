import React, { useState, useEffect, useRef } from "react";
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaRandom,
  FaRedoAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { PlayLists } from "./MusicPlayer";

type Song = {
  id: string;
  title: string;
  artist: string;
  duration: number;
  url: string;
  thumbnail: string;
};

const MusicPlayer: React.FC = () => {
  const songs = PlayLists;

  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (songs.length > 0) {
      setCurrentSong(songs[0]);
    }
  }, [songs]);

  const handlePlay = () => {
    if (currentSong) {
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    let nextIndex = 0;
    if (isShuffled) {
      nextIndex = Math.floor(Math.random() * songs.length);
    } else {
      nextIndex =
        (songs.findIndex((song) => song.id === currentSong?.id) + 1) %
        songs.length;
    }
    setCurrentSong(songs[nextIndex]);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    let prevIndex = songs.length - 1;
    if (isShuffled) {
      prevIndex = Math.floor(Math.random() * songs.length);
    } else {
      prevIndex =
        (songs.findIndex((song) => song.id === currentSong?.id) -
          1 +
          songs.length) %
        songs.length;
    }
    setCurrentSong(songs[prevIndex]);
    setIsPlaying(true);
  };

  const handleRepeat = () => {
    setIsRepeat(!isRepeat);
  };

  const handleShuffle = () => {
    setIsShuffled(!isShuffled);
  };

  const handleProgressUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setProgress((currentTime / duration) * 100);
    }
  };

  useEffect(() => {
    const interval = setInterval(handleProgressUpdate, 1000);
    return () => clearInterval(interval);
  }, [currentSong, isPlaying]);

  useEffect(() => {
    if (isRepeat && currentSong && audioRef.current) {
      audioRef.current.loop = true;
    } else {
      audioRef.current?.removeAttribute("loop");
    }
  }, [isRepeat, currentSong]);

  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-gray-200 p-4">
        <h2 className="text-2xl font-bold mb-4">Playlist</h2>
        <ul>
          {songs.map((song) => (
            <li
              key={song.id}
              className={`cursor-pointer p-2 ${
                currentSong?.id === song.id ? "bg-gray-300" : ""
              }`}
              onClick={() => setCurrentSong(song)}
            >
              {song.title} - {song.artist}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 bg-gray-100 p-4 flex flex-col justify-center items-center">
        {currentSong && (
          <>
            <motion.div
              className="w-48 h-48 rounded-full overflow-hidden mb-4"
              animate={{ rotate: isPlaying ? "360deg" : "0deg" }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <img
                src={currentSong.thumbnail}
                alt={currentSong.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <h3 className="text-2xl font-bold mb-2">{currentSong.title}</h3>
            <p className="text-gray-500 mb-4">{currentSong.artist}</p>
            <div className="w-full mb-4">
              <div className="bg-gray-300 h-2 relative">
                <div
                  className="bg-blue-500 h-2"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <div className="flex justify-center mb-4 gap-4">
              <button onClick={handleShuffle}>
                <FaRandom className={isShuffled ? "text-blue-500" : ""} />
              </button>
              <button className="mr-4" onClick={handlePrev}>
                <FaStepBackward />
              </button>
              <button className="mr-4" onClick={handlePlay}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button className="mr-4" onClick={handleNext}>
                <FaStepForward />
              </button>
              <button className="mr-4" onClick={handleRepeat}>
                <FaRedoAlt className={isRepeat ? "text-blue-500" : ""} />
              </button>
            </div>
            <audio ref={audioRef} src={currentSong.url} onEnded={handleNext} />
          </>
        )}
      </div>
    </div>
  );
};
export default MusicPlayer;
