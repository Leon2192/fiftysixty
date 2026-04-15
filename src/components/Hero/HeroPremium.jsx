import { useRef, useState, useEffect } from "react";
import { Box, useMediaQuery, useTheme, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PauseIcon from "@mui/icons-material/Pause";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const desktopImage = "/images/15/portada.jpeg";
  const mobileImage = "/images/15/portada.jpeg";

  // ref para el elemento audio
  const audioRef = useRef(null);
  // estado para el icono/play–pause
  const [isPlaying, setIsPlaying] = useState(true);

  // ref de intersección, renombrado a avoid collision
  const { ref: viewRef } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // arrancamos la música al montar
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // si el autoplay falla
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
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${isMobile ? mobileImage : desktopImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Botón de música */}
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
          "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
          zIndex: 3,
        }}
      >
        {isPlaying ? <PauseIcon /> : <MusicNoteIcon />}
      </IconButton>

      {/* Audio autoplay + loop */}
      <audio
        ref={audioRef}
        src="/cancion1.mp3"
        preload="auto"
        autoPlay
        loop
      />

      {/* Flecha animada */}
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
            sx={{ fontSize: { xs: "4rem", md: "5rem" }, color: "#000" }}
          />
        </a>
      </Box>
    </Box>
  );
};

export default Hero;
