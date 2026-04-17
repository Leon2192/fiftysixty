import {
  Box,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import CelebrationIcon from "@mui/icons-material/Celebration";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { useInView } from "react-intersection-observer";

const MAPS_URL =
  "https://www.google.com/maps/place/Predio+Veteranos+de+Guerra/@-34.7128785,-58.509744,17z/data=!3m1!4b1!4m6!3m5!1s0x95bccf0053d218b9:0xa96617916a2936ba!8m2!3d-34.7128785!4d-58.509744!16s%2Fg%2F11vpx95df4!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQxMy4wIKXMDSoASAFQAw%3D%3D";

const InfoEvent = () => {
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
        py: { xs: 6, md: 8 },
        px: 2,
        backgroundColor: "var(--surface-main)",
        "&::before": {
          content: '""',
          position: "absolute",
          right: "-120px",
          top: "-120px",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(143,101,66,0.18) 0%, rgba(143,101,66,0) 70%)",
          animation: "infoBlob 3.6s ease-in-out infinite",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          left: "-120px",
          bottom: "-140px",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.46) 0%, rgba(255,255,255,0) 65%)",
          animation: "infoBlobAlt 4.6s ease-in-out infinite",
        },
        "@keyframes infoBlob": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-30px, 24px) scale(1.18)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        "@keyframes infoBlobAlt": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(34px, -22px) scale(1.14)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 760,
          mx: "auto",
          borderRadius: 4,
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 3.2, sm: 4.5 },
          border: "1px solid var(--line-color)",
          backgroundColor: "var(--surface-soft)",
          textAlign: "center",
          boxShadow: "0 14px 28px rgba(67, 47, 31, 0.1)",
          opacity: inView ? 1 : 0,
          transform: inView
            ? "translateY(0) rotate(0deg) scale(1)"
            : "translateY(84px) rotate(-7deg) scale(0.8)",
          filter: inView ? "blur(0)" : "blur(7px)",
          transition: "all 620ms cubic-bezier(0.17, 0.84, 0.44, 1)",
        }}
      >
        <CelebrationIcon
          sx={{
            fontSize: 48,
            color: "var(--accent-main)",
            mb: 1,
            "@keyframes iconBurst": {
              "0%": { transform: "scale(1) rotate(0deg)" },
              "35%": { transform: "scale(1.24) rotate(-20deg)" },
              "70%": { transform: "scale(1.04) rotate(18deg)" },
              "100%": { transform: "scale(1) rotate(0deg)" },
            },
            animation: inView ? "iconBurst 0.95s ease-out both" : "none",
          }}
        />

        <Typography
          sx={{
            fontFamily: "var(--font-title)",
            fontSize: { xs: "2rem", md: "2.5rem" },
            color: "var(--text-primary)",
            mb: 1,
          }}
        >
          Festejo
        </Typography>

        <Typography
          sx={{
            mb: 2.2,
            fontFamily: "var(--font-body)",
            fontSize: { xs: "1.45rem", md: "1.95rem" },
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "0.02em",
            "@keyframes dateFlash": {
              "0%": { transform: "scale(1)", color: "var(--text-primary)" },
              "50%": { transform: "scale(1.13)", color: "var(--accent-dark)" },
              "100%": { transform: "scale(1)", color: "var(--text-primary)" },
            },
            animation: inView ? "dateFlash 1s ease-in-out 0.1s both" : "none",
          }}
        >
          1 de Mayo de 2026
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 1,
            mb: 2.6,
          }}
        >
          <LocationOnRoundedIcon
            sx={{
              color: "var(--accent-main)",
              mt: "2px",
              flexShrink: 0,
            }}
          />

          <Typography
            sx={{
              maxWidth: 520,
              fontFamily: "var(--font-body)",
              fontSize: { xs: "0.98rem", md: "1.03rem" },
              color: "var(--text-secondary)",
              lineHeight: 1.55,
            }}
          >
            Ana Maria Janer 2400, B1785BWD Aldo Bonzi, Provincia de Buenos
            Aires
          </Typography>
        </Box>

        <Button
          component="a"
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          sx={{
            borderRadius: 999,
            px: 4.1,
            py: 1.2,
            backgroundColor: "var(--accent-main)",
            color: "#fff",
            textTransform: "none",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            boxShadow: "0 10px 18px rgba(104, 72, 44, 0.25)",
            transition: "transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease",
            "@keyframes buttonWobble": {
              "0%": { transform: "translateX(0)" },
              "20%": { transform: "translateX(-7px) rotate(-2deg)" },
              "40%": { transform: "translateX(6px) rotate(2deg)" },
              "60%": { transform: "translateX(-5px) rotate(-1deg)" },
              "80%": { transform: "translateX(3px) rotate(1deg)" },
              "100%": { transform: "translateX(0)" },
            },
            animation: inView ? "buttonWobble 0.75s ease-out 0.25s both" : "none",
            "&:hover": {
              transform: "translateY(-4px) scale(1.04)",
              backgroundColor: "var(--accent-dark)",
              boxShadow: "0 14px 24px rgba(104, 72, 44, 0.35)",
            },
          }}
        >
          Como llegar
        </Button>
      </Box>

      <Divider
        sx={{
          mt: 6,
          mx: "auto",
          width: "40px",
          borderBottomWidth: 2,
          borderColor: "var(--line-dark)",
          opacity: inView ? 1 : 0,
          transform: inView ? "scaleX(1)" : "scaleX(0.2)",
          transition: "all 700ms ease 0.5s",
        }}
      />
    </Box>
  );
};

export default InfoEvent;
