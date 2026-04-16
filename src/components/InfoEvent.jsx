import {
  Box,
  Typography,
  Button,
  Divider,
  Slide,
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
        py: { xs: 6, md: 8 },
        px: 2,
        backgroundColor: "var(--surface-main)",
      }}
    >
      <Slide in={inView} direction="up" timeout={800}>
        <Box
          sx={{
            maxWidth: 760,
            mx: "auto",
            borderRadius: 4,
            px: { xs: 2, sm: 4, md: 6 },
            py: { xs: 3.2, sm: 4.5 },
            border: "1px solid var(--line-color)",
            backgroundColor: "var(--surface-soft)",
            textAlign: "center",
            boxShadow: "0 14px 28px rgba(67, 47, 31, 0.1)",
          }}
        >
          <CelebrationIcon
            sx={{
              fontSize: 48,
              color: "var(--accent-main)",
              mb: 1,
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

          <Typography
            sx={{
              mb: 3.2,
              fontFamily: "var(--font-body)",
              fontSize: { xs: "0.98rem", md: "1rem" },
              color: "var(--text-primary)",
              letterSpacing: "0.04em",
            }}
          >
            Te esperamos para celebrar juntos.
          </Typography>

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
              "&:hover": {
                backgroundColor: "var(--accent-dark)",
                boxShadow: "0 12px 20px rgba(104, 72, 44, 0.3)",
              },
            }}
          >
            Como llegar
          </Button>
        </Box>
      </Slide>

      <Divider
        sx={{
          mt: 6,
          mx: "auto",
          width: "40px",
          borderBottomWidth: 2,
          borderColor: "var(--line-dark)",
        }}
      />
    </Box>
  );
};

export default InfoEvent;
