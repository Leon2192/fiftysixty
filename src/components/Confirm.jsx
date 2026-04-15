import { Box, Typography, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const Confirm = () => {
  return (
    <Box
      sx={{
        minHeight: "40vh",
        py: 8,
        px: 2,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <CheckIcon
        sx={{
          fontSize: { xs: 60, md: 80 },
          color: "#43A047",
          mb: 2,
        }}
      />

      <Typography
        variant="h4"
        sx={{
          fontFamily: "'Catchy Mager', cursive",
          fontWeight: "bold",
          fontSize: { xs: "2rem", md: "2.5rem" },
          mb: 2,
          color: "#222",
        }}
      >
        Confirmación de asistencia
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "1.1rem", md: "1.1rem" },
          fontFamily: "'Catchy Mager', cursive",
          maxWidth: 500,
          mb: 4,
          color: "#555",
        }}
      >
        Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu asistencia!
      </Typography>

      <Button
        variant="contained"
        sx={{
          borderRadius: 999,
          px: 4,
          fontFamily: "'Catchy Mager', cursive",
          backgroundColor: "#000",
          color: "#fff",
          boxShadow: "none",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#fff",
            border: "2px solid #000",
            color: "#000",
          },
        }}
      >
        Confirmar asistencia
      </Button>
    </Box>
  );
};

export default Confirm;