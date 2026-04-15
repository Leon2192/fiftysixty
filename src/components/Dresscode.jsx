import { Box, Typography, Fade } from "@mui/material";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import DryCleaningIcon from "@mui/icons-material/DryCleaning"; 
import { useInView } from "react-intersection-observer";

const Dresscode = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "30vh",
        py: 8,
        px: 2,
        backgroundColor: "#9a64ea",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Fade in={inView} timeout={800}>
        <Box
          sx={{
            transform: inView ? "scale(1)" : "scale(0.95)",
            transition: "transform 0.6s ease-out",
          }}
        >
          <Box display="flex" justifyContent="center" gap={2} mb={2}>
            <CheckroomIcon sx={{ fontSize: 60, color: "#fff" }} />
          
          </Box>

          <Typography
            variant="h4"
            sx={{
                fontFamily: "'Catchy Mager', cursive",
          fontWeight: "bold",
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              mb: 1,
              color: "#fff",
            }}
          >
            DRESSCODE
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.2rem", md: "1.4rem" },
              color: "#fff",
                fontFamily: "'Catchy Mager', cursive",
            }}
          >
            Vestimenta formal, elegante
          </Typography>
        </Box>
      </Fade>
    </Box>
  );
};

export default Dresscode;
