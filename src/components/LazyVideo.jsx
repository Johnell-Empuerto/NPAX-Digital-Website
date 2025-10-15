import React, { useEffect, useRef, useState } from "react";

const LazyVideo = ({ src, poster, className }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing once loaded to save resources
          }
        });
      },
      { threshold: 0.25 } // Trigger when 25% of the video is in view
    );

    const currentRef = videoRef.current;
    if (currentRef) {
      observer.observe(currentRef);
      // Check if already visible on mount (e.g., for videos at the top of the page)
      if (currentRef.getBoundingClientRect().top < window.innerHeight) {
        setIsVisible(true);
        observer.disconnect();
      }
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster} // Use a thumbnail for a preview (optional but recommended)
      autoPlay
      loop
      muted
      playsInline
    >
      {isVisible && <source src={src} type="video/mp4" />}
    </video>
  );
};

export default LazyVideo;