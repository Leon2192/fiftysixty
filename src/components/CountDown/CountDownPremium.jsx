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

  const unidades = [
    { label: "Dias", value: timeLeft.dias },
    { label: "Horas", value: timeLeft.horas },
    { label: "Minutos", value: timeLeft.minutos },
    { label: "Segundos", value: timeLeft.segundos },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      id="info"
      sx={{
        minHeight: "56vh",
        py: { xs: 6, md: 8 },
        px: 2,
        background:
          "linear-gradient(180deg, var(--bg-main) 0%, var(--surface-soft) 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Slide in={inView} direction="up" timeout={800}>
        <Typography
          sx={{
            fontSize: { xs: "1.55rem", md: "2.5rem" },
            fontFamily: "var(--font-title)",
            fontWeight: 600,
            mb: 3,
            color: "var(--text-primary)",
          }}
        >
          Quedan solo...
        </Typography>
      </Slide>

      <Fade in={inView} timeout={1200}>
        <Grid container spacing={{ xs: 1.2, sm: 2 }} justifyContent="center">
          {unidades.map(({ label, value }) => (
            <Grid item xs={6} sm={3} key={label}>
              <Box
                textAlign="center"
                sx={{
                  py: { xs: 1.6, sm: 2.4 },
                  px: { xs: 1.2, sm: 2.2 },
                  borderRadius: 3,
                  border: "1px solid var(--line-color)",
                  backgroundColor: "rgba(255,255,255,0.75)",
                  boxShadow: "0 10px 22px rgba(60, 45, 28, 0.08)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.9rem", md: "3.4rem" },
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-title)",
                  }}
                >
                  {String(value).padStart(2, "0")}
                </Typography>

                <Typography
                  sx={{
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontSize: { xs: "0.74rem", md: "0.84rem" },
                    fontWeight: 600,
                    fontFamily: "var(--font-body)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {label}
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
