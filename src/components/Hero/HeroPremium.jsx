import { useRef, useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PauseIcon from "@mui/icons-material/Pause";
import { useInView } from "react-intersection-observer";

const Hero = ({ enableMusic }) => {
  const imageSrc = "/images/15/portada.jpeg";

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { ref: viewRef } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (enableMusic) {
      audio.play().then(() => setIsPlaying(true)).catch(() => {
        setIsPlaying(false);
      });
      return;
    }

    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  }, [enableMusic]);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {
        setIsPlaying(false);
      });
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
        backgroundColor: "var(--bg-dark)",
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
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(12, 9, 8, 0.16) 0%, rgba(12, 9, 8, 0.55) 100%)",
          zIndex: 1,
        }}
      />

      <IconButton
        onClick={toggleAudio}
        aria-label={isPlaying ? "Pausar musica" : "Reproducir musica"}
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          backgroundColor: "rgba(255, 252, 247, 0.88)",
          color: "var(--text-primary)",
          width: 50,
          height: 50,
          "&:hover": {
            backgroundColor: "rgba(255, 252, 247, 1)",
          },
          zIndex: 3,
        }}
      >
        {isPlaying ? <PauseIcon /> : <MusicNoteIcon />}
      </IconButton>

      <audio
        ref={audioRef}
        src="/cachi.mp3"
        preload="auto"
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
              fontSize: { xs: "3.5rem", md: "4.2rem" },
              color: "#fff",
            }}
          />
        </a>
      </Box>
    </Box>
  );
};

export default Hero;
