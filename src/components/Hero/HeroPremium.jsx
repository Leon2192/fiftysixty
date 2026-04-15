import { useRef, useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PauseIcon from "@mui/icons-material/Pause";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const imageSrc = "/images/15/portada.jpeg";

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const { ref: viewRef } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true));
    }
  };

  return (
    <Box
      ref={viewRef}
      sx={{
        position: "relative",
        width: "100%",
        height: "100dvh",
        overflow: "hidden",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={imageSrc}
        alt="Portada"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
        }}
      />

      <IconButton
        onClick={toggleAudio}
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          backgroundColor: "rgba(255,255,255,0.7)",
          color: "#000",
          width: 50,
          height: 50,
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.9)",
          },
          zIndex: 3,
        }}
      >
        {isPlaying ? <PauseIcon /> : <MusicNoteIcon />}
      </IconButton>

      <audio
        ref={audioRef}
        src="/cancion1.mp3"
        preload="auto"
        autoPlay
        loop
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          animation: "bounce 2s infinite",
          "@keyframes bounce": {
            "0%,20%,50%,80%,100%": {
              transform: "translateX(-50%) translateY(0)",
            },
            "40%": {
              transform: "translateX(-50%) translateY(-10px)",
            },
            "60%": {
              transform: "translateX(-50%) translateY(-5px)",
            },
          },
        }}
      >
        <a href="#info" style={{ color: "inherit" }}>
          <KeyboardArrowDownIcon
            sx={{
              fontSize: { xs: "4rem", md: "5rem" },
              color: "#000",
            }}
          />
        </a>
      </Box>
    </Box>
  );
};

export default Hero;