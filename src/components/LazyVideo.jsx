import React, { useRef, useEffect } from 'react';

const LazyVideo = ({ src, poster, className, preload = 'none' }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        videoRef.current.src = src; // Load src only when in view
        videoRef.current.load();
        observer.disconnect();
      }
    });
    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      preload={preload}
      autoPlay
      loop
      muted
      playsInline
    />
  );
};

export default LazyVideo;