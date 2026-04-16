import { Box, Typography, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useInView } from "react-intersection-observer";

const RSVP_URL =
  "https://wa.me/5491135939460?text=Hola%2C%20confirmo%20mi%20asistencia%20al%20evento%2050%2F60.";

const Confirm = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "40vh",
        py: { xs: 6, md: 8 },
        px: 2,
        background:
          "linear-gradient(180deg, var(--surface-main) 0%, var(--surface-soft) 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -120,
          right: -100,
          width: 250,
          height: 250,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(143,101,66,0.18) 0%, rgba(143,101,66,0) 70%)",
          animation: "confirmGlow 3.8s ease-in-out infinite",
        },
        "@keyframes confirmGlow": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.24)" },
          "100%": { transform: "scale(1)" },
        },
      }}
    >
      <CheckIcon
        sx={{
          position: "relative",
          zIndex: 1,
          fontSize: { xs: 54, md: 72 },
          color: "var(--accent-main)",
          mb: 2,
          opacity: inView ? 1 : 0,
          transform: inView
            ? "translateY(0) scale(1) rotate(0deg)"
            : "translateY(40px) scale(0.55) rotate(-35deg)",
          transition: "all 520ms cubic-bezier(0.17, 0.84, 0.44, 1)",
          "@keyframes checkPop": {
            "0%": { transform: "scale(1) rotate(0deg)" },
            "30%": { transform: "scale(1.28) rotate(-12deg)" },
            "60%": { transform: "scale(0.95) rotate(10deg)" },
            "100%": { transform: "scale(1) rotate(0deg)" },
          },
          animation: inView ? "checkPop 0.8s ease-out 0.1s both" : "none",
        }}
      />

      <Typography
        sx={{
          position: "relative",
          zIndex: 1,
          fontFamily: "var(--font-title)",
          fontSize: { xs: "1.9rem", md: "2.45rem" },
          mb: 2,
          color: "var(--text-primary)",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0) scale(1)" : "translateY(34px) scale(0.85)",
          transition: "all 560ms cubic-bezier(0.17, 0.84, 0.44, 1) 70ms",
        }}
      >
        ¡Confirmación de asistencia!
      </Typography>

      <Typography
        sx={{
          position: "relative",
          zIndex: 1,
          fontSize: { xs: "1rem", md: "1.04rem" },
          fontFamily: "var(--font-body)",
          maxWidth: 500,
          mb: 4,
          color: "var(--text-secondary)",
          lineHeight: 1.6,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(36px)",
          transition: "all 560ms cubic-bezier(0.17, 0.84, 0.44, 1) 120ms",
        }}
      >
        ¡Esperamos que seas parte de esta gran celebracion.
        Confirmanos tu asistencia para organizar todo mejor!
      </Typography>

      <Button
        component="a"
        href={RSVP_URL}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        sx={{
          position: "relative",
          zIndex: 1,
          borderRadius: 999,
          px: 4.2,
          py: 1.2,
          fontFamily: "var(--font-body)",
          fontWeight: 700,
          backgroundColor: "var(--accent-main)",
          color: "#fff",
          textTransform: "none",
          boxShadow: "0 12px 22px rgba(104, 72, 44, 0.25)",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(44px) scale(0.85)",
          transition:
            "all 520ms cubic-bezier(0.17, 0.84, 0.44, 1) 180ms, transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease",
          "@keyframes buttonPulse": {
            "0%": { boxShadow: "0 0 0 0 rgba(104, 72, 44, 0.3)" },
            "70%": { boxShadow: "0 0 0 20px rgba(104, 72, 44, 0)" },
            "100%": { boxShadow: "0 0 0 0 rgba(104, 72, 44, 0)" },
          },
          animation: inView ? "buttonPulse 1.4s ease-out 0.2s infinite" : "none",
          "&:hover": {
            transform: "translateY(-6px) scale(1.07)",
            backgroundColor: "var(--accent-dark)",
            boxShadow: "0 14px 24px rgba(104, 72, 44, 0.32)",
          },
        }}
      >
        ¡Confirmar por WhatsApp!
      </Button>
    </Box>
  );
};

export default Confirm;
