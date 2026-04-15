import { Box, Typography, Button } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const Confirm = () => {
  return (
    <Box
      sx={{
        minHeight: "40vh",
        py: 8,
        px: 2,
        backgroundColor: "#D7A21B",
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
          color: "#fff",
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
          color: "#222",
        }}
      >
        Espero que seas parte de esta gran celebración. ¡Confirmame tu asistencia!
      </Typography>

      {/* Botón */}
    <Button
  component="a"
  href="https://docs.google.com/forms/d/e/1FAIpQLSelY0QMb2Pdi7bOb19tFv-Q42qepyMiIHq9qaPUBfGh_Qr8Lw/viewform?fbzx=4030668355714172330"
  target="_blank"
  rel="noopener noreferrer"
  variant="contained"
  sx={{
    borderRadius: 999,
    px: 4,
    fontFamily: "'Catchy Mager', cursive",
    backgroundColor: "#9a64ea",
    color: "#fff",
    boxShadow: "none",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#fff",
      border: "2px solid #9a64ea",
      color: "#9a64ea",
    },
  }}
>
  Confirmar asistencia
</Button>

    </Box>
  );
};

export default Confirm;
