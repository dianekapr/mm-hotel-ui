// components/VideoSection.js
import { useState } from 'react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative overflow-hidden w-full h-[500px] bg-[#f8f5e4]">
      {/* Scrolling Text */}
      <div className="absolute top-0 left-0 right-0 flex flex-col z-10">
        <div className="text-2xl font-bold text-center animate-scroll-left">Balance - Relax</div>
        <div className="text-2xl font-bold text-center animate-scroll-right">... - Healing</div>
      </div>

      {/* Image or Video */}
      <div className="relative flex justify-center items-center w-full h-full group">
        {isPlaying ? (
          <video
            controls
            autoPlay
            className="w-full h-full object-cover"
          >
            <source src="/path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src="/path-to-your-image.jpg"
            alt="Resort Image"
            className="w-full h-full object-cover cursor-pointer"
            onClick={handlePlayClick}
          />
        )}
        
        <div className="absolute bottom-4 text-white bg-yellow-400 px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          Play Video
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
