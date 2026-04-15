import React, { useRef, useEffect, useState } from "react";
import "../Style/Home.css"; // contains .emerge-3d animation below
import VID1 from "../assets/Vids/VID-1.mp4";

function Home() {
  const videoRef = useRef(null);
  const [showTitle, setShowTitle] = useState(false);

  // Tune this to the exact contact moment (seconds)
  const revealAtSeconds = 4;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.play?.().catch(() => {}); // mobile kick

    const onTimeUpdate = () => {
      if (!showTitle && v.currentTime >= revealAtSeconds) {
        setShowTitle(true);
        v.removeEventListener("timeupdate", onTimeUpdate);
      }
    };

    v.addEventListener("timeupdate", onTimeUpdate);
    return () => v.removeEventListener("timeupdate", onTimeUpdate);
  }, [showTitle, revealAtSeconds]);

  return (
    <div
      id="home"
      className="relative flex h-screen min-h-screen items-center justify-center overflow-hidden"
      style={{ perspective: "900px" }} // depth for translateZ
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 -z-10 h-full w-full object-cover pointer-events-none"
        src={VID1}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Overlay keeps frames readable */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Foreground hero content */}
      <div className="relative z-10 px-6">
        <h1
          aria-hidden={!showTitle}
          className={[
            "text-center font-extrabold tracking-tight text-white drop-shadow-xl",
            "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight",
            // hidden by default
            showTitle ? "emerge-3d" : "opacity-0",
          ].join(" ")}
        >
          Connecting Ideas. Building Technology. Empowering Growth.
        </h1>
      </div>
    </div>
  );
}

export default Home;