import { Box, Typography, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const RSVP_URL =
  "https://wa.me/5491135939460?text=Hola%2C%20confirmo%20mi%20asistencia%20al%20evento%2050%2F60.";

const Confirm = () => {
  return (
    <Box
      sx={{
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
      }}
    >
      <CheckIcon
        sx={{
          fontSize: { xs: 54, md: 72 },
          color: "var(--accent-main)",
          mb: 2,
        }}
      />

      <Typography
        sx={{
          fontFamily: "var(--font-title)",
          fontSize: { xs: "1.9rem", md: "2.45rem" },
          mb: 2,
          color: "var(--text-primary)",
        }}
      >
        ¡Confirmación de asistencia!
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "1rem", md: "1.04rem" },
          fontFamily: "var(--font-body)",
          maxWidth: 500,
          mb: 4,
          color: "var(--text-secondary)",
          lineHeight: 1.6,
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
          borderRadius: 999,
          px: 4.2,
          py: 1.2,
          fontFamily: "var(--font-body)",
          fontWeight: 700,
          backgroundColor: "var(--accent-main)",
          color: "#fff",
          textTransform: "none",
          boxShadow: "0 12px 22px rgba(104, 72, 44, 0.25)",
          transition: "all 0.25s ease",
          "&:hover": {
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
