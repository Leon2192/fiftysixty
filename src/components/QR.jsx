import { Box, Typography, Fade , Divider} from "@mui/material";
import { useInView } from "react-intersection-observer";

const Qr = () => {
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
        backgroundColor: "#ffffff", // fondo blanco
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
          {/* Imagen centrada */}
          <Box display="flex" justifyContent="center" mb={2}>
            <Box
              component="img"
              src="/images/qr.avif"
              alt="Código QR"
              sx={{
                width: 200,
                height: 200,
                objectFit: "contain",
              }}
            />
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontFamily: "'Catchy Mager', cursive",
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              mb: 1,
              color: "#757575", // gris medio
            }}
          >
            Escaneá este QR
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1rem", md: "1.7rem" },
              color: "#292020ff", // gris más claro
              fontFamily: "'Catchy Mager', cursive"
            }}
          >
            ¡Compartí conmigo las fotos del evento!
          </Typography>

          <Typography
  variant="body1"
  sx={{
    mt: 3,
    color: "#1d1a1aff",
    fontSize: { xs: "0.95rem", md: "1.1rem" },
    fontFamily: "'Catchy Mager', cursive"
  }}
>
  O podés presionar acá
</Typography>

<Box mt={2}>
  <Box
    component="a"
    href="https://photos.google.com/share/AF1QipNwXlKkqnFwICsazvslEhyALB1PXHjOlJuQsHJo3Hg5PwnWxHHvINJHvFzfo1IfSA?pli=1&key=QnhKTHJkeFJPM1BUbURuaVVDSHpWd1JfQXlMbHhB"
    target="_blank"
    rel="noopener noreferrer"
    sx={{ textDecoration: "none" }}
  >
   <Box
  component="button"
  sx={{
    border: "2px solid #9a64ea",
    color: "#9a64ea",
    px: 3,
    py: 1,
    fontFamily: "'Catchy Mager', cursive",
    fontSize: "1rem",
    fontWeight: 500,
    borderRadius: "999px",
    backgroundColor: "transparent",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#9a64ea22", // mismo morado con transparencia
    },
  }}
>
  Ir al álbum
</Box>

  </Box>
</Box>

        </Box>
      </Fade>

       {/* Divider al final */}
       <Divider
        sx={{
          mt: 6,
          mx: "auto",
          width: "40px",
          borderBottomWidth: 2,
          borderColor: "#ccc",
        }}
      />
    </Box>
  );
};

export default Qr;
