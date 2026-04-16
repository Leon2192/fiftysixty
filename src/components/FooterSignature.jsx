import { Box, Link, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";

const FooterSignature = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Box
      component="footer"
      ref={ref}
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: 54,
        px: 2,
        py: 1.2,
        backgroundColor: "var(--surface-soft)",
        borderTop: "1px solid var(--line-color)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0) 100%)",
          transform: inView ? "translateX(160%)" : "translateX(-160%)",
          transition: "transform 520ms ease 40ms",
          animation: inView ? "footerSweep 1.15s linear infinite" : "none",
          pointerEvents: "none",
        },
        "@keyframes footerSweep": {
          "0%": { transform: "translateX(-160%)" },
          "100%": { transform: "translateX(160%)" },
        },
      }}
    >
      <Typography
        sx={{
          position: "relative",
          zIndex: 1,
          fontFamily: "var(--font-body)",
          fontSize: { xs: "0.86rem", sm: "0.92rem" },
          color: "var(--text-secondary)",
          textAlign: "center",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0) scale(1)" : "translateY(24px) scale(0.9)",
          transition: "all 450ms ease",
        }}
      >
        Creado por{" "}
        <Link
          href="https://www.lacasadeldetalle.com.ar"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{
            color: "var(--text-secondary)",
            fontWeight: 700,
            transition: "color 0.2s ease, letter-spacing 0.2s ease, transform 0.2s ease",
            "&:hover": {
              color: "var(--accent-main)",
              letterSpacing: "0.04em",
              transform: "translateY(-1px) scale(1.03)",
            },
          }}
        >
          La Casa del Detalle
        </Link>
      </Typography>
    </Box>
  );
};

export default FooterSignature;
