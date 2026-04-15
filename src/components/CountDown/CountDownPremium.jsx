import { Box, Typography, Grid, Slide, Fade } from "@mui/material";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// 01 de mayo de 2026 a las 12:00 hs
const targetDate = new Date(2026, 4, 1, 12, 0, 0);

const getTimeLeft = () => {
  const now = new Date();
  const difference = targetDate - now;

  const totalSeconds = Math.max(0, Math.floor(difference / 1000));
  const dias = Math.floor(totalSeconds / (3600 * 24));
  const horas = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutos = Math.floor((totalSeconds % 3600) / 60);
  const segundos = totalSeconds % 60;

  return { dias, horas, minutos, segundos };
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const unidades = Object.entries(timeLeft);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      id="info"
      sx={{
        minHeight: "60vh",
        py: 4,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Slide in={inView} direction="up" timeout={800}>
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", md: "2.5rem" },
            fontFamily: "'Catchy Mager', cursive",
            fontWeight: 500,
            mb: 2,
            color: "#222",
          }}
        >
          Quedan solo...
        </Typography>
      </Slide>

      <Fade in={inView} timeout={1200}>
        <Grid container spacing={2} justifyContent="center">
          {unidades.map(([unit, value]) => (
            <Grid item key={unit}>
              <Box textAlign="center">
                <Typography
                  sx={{
                    fontSize: { xs: "2rem", md: "4rem" },
                    fontWeight: "bold",
                    color: "#222",
                    fontFamily: "'Catchy Mager', cursive",
                  }}
                >
                  {String(value).padStart(2, "0")}
                </Typography>

                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontSize: { xs: "0.8rem", md: "1.2rem" },
                    fontFamily: "'Catchy Mager', cursive",
                    color: "#555",
                  }}
                >
                  {unit}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Fade>
    </Box>
  );
};

export default Countdown;