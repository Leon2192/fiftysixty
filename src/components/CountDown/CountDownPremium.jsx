import { Box, Typography, Grid } from "@mui/material";
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
        position: "relative",
        overflow: "hidden",
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
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-20%",
          left: "-35%",
          width: "70%",
          height: "140%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 65%)",
          filter: "blur(6px)",
          animation: "countGlow 4.2s linear infinite",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: "-30%",
          background:
            "conic-gradient(from 90deg, rgba(143,101,66,0) 0deg, rgba(143,101,66,0.17) 70deg, rgba(143,101,66,0) 130deg)",
          filter: "blur(12px)",
          animation: "countSpin 5.4s linear infinite",
        },
        "@keyframes countGlow": {
          "0%": { transform: "translateX(-10%) translateY(0)" },
          "50%": { transform: "translateX(22%) translateY(-4%)" },
          "100%": { transform: "translateX(48%) translateY(0)" },
        },
        "@keyframes countSpin": {
          to: { transform: "rotate(360deg)" },
        },
      }}
    >
      <Typography
        sx={{
          position: "relative",
          zIndex: 1,
          fontSize: { xs: "1.55rem", md: "2.5rem" },
          fontFamily: "var(--font-title)",
          fontWeight: 600,
          mb: 3,
          color: "var(--text-primary)",
          opacity: inView ? 1 : 0,
          transform: inView
            ? "translateY(0) scale(1)"
            : "translateY(66px) scale(0.82) rotate(-5deg)",
          transition: "all 620ms cubic-bezier(0.17, 0.84, 0.44, 1)",
          "@keyframes titlePulse": {
            "0%": { textShadow: "0 0 0 rgba(143, 101, 66, 0)" },
            "50%": { textShadow: "0 0 26px rgba(143, 101, 66, 0.35)" },
            "100%": { textShadow: "0 0 0 rgba(143, 101, 66, 0)" },
          },
          animation: inView ? "titlePulse 1.8s ease-in-out 0.25s infinite" : "none",
        }}
      >
        Quedan solo...
      </Typography>

      <Grid
        container
        spacing={{ xs: 1.2, sm: 2 }}
        justifyContent="center"
        sx={{ position: "relative", zIndex: 1 }}
      >
        {unidades.map(({ label, value }, index) => (
          <Grid
            item
            xs={6}
            sm={3}
            key={label}
            sx={{
              opacity: inView ? 1 : 0,
              transform: inView
                ? "translateY(0) rotateX(0deg)"
                : "translateY(84px) rotateX(52deg) scale(0.78)",
              transition: `all 620ms cubic-bezier(0.17, 0.84, 0.44, 1) ${index * 95}ms`,
            }}
          >
            <Box
              textAlign="center"
              sx={{
                py: { xs: 1.6, sm: 2.4 },
                px: { xs: 1.2, sm: 2.2 },
                borderRadius: 3,
                border: "1px solid var(--line-color)",
                backgroundColor: "rgba(255,255,255,0.75)",
                boxShadow: "0 10px 22px rgba(60, 45, 28, 0.08)",
                transformOrigin: "center",
                "@keyframes cardHover": {
                  "0%": { transform: "translateY(0) rotate(0deg)" },
                  "35%": {
                    transform: `translateY(-11px) rotate(${index % 2 === 0 ? "-1.2deg" : "1.2deg"})`,
                  },
                  "70%": { transform: "translateY(4px) rotate(0deg)" },
                  "100%": { transform: "translateY(0) rotate(0deg)" },
                },
                animation: inView
                  ? `cardHover ${1.9 + index * 0.22}s cubic-bezier(0.37, 0, 0.63, 1) ${index * 130}ms infinite`
                  : "none",
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
    </Box>
  );
};

export default Countdown;
