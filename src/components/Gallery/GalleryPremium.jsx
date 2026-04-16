import { Box, Grid, Typography, IconButton, Dialog, DialogContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/keyboard";

const images = [
  "/images/15/one.jpeg",
  "/images/15/two.jpeg",
  "/images/15/three.jpeg",
  "/images/15/four.jpeg",
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const { ref } = useInView({ triggerOnce: true, threshold: 0.15 });

  const openAt = (index) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const closeLightbox = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open && swiperRef.current) {
      swiperRef.current.slideTo(activeIndex, 0);
    }
  }, [open, activeIndex]);

  return (
    <Box
      ref={ref}
      id="galeria"
      sx={{
        py: { xs: 6, md: 8 },
        px: 2,
        backgroundColor: "var(--surface-main)",
      }}
    >
      <Box sx={{ maxWidth: 980, mx: "auto" }}>
        <Typography
          sx={{
            mb: { xs: 2.5, md: 3.2 },
            textAlign: "center",
            fontFamily: "var(--font-title)",
            fontSize: { xs: "2rem", md: "2.45rem" },
            color: "var(--text-primary)",
          }}
        >
          Galeria
        </Typography>

        <Typography
          sx={{
            mb: { xs: 3, md: 4 },
            textAlign: "center",
            fontFamily: "var(--font-body)",
            fontSize: { xs: "0.95rem", md: "1rem" },
            color: "var(--text-secondary)",
          }}
        >
          Un resumen de los momentos que vamos a celebrar.
        </Typography>

        <Grid container spacing={{ xs: 1.2, sm: 2 }}>
          {images.map((src, index) => (
            <Grid item xs={6} key={src}>
              <Box
                component="button"
                type="button"
                onClick={() => openAt(index)}
                aria-label={`Abrir imagen ${index + 1}`}
                sx={{
                  p: 0,
                  border: "none",
                  width: "100%",
                  borderRadius: { xs: 2.2, sm: 3.1 },
                  overflow: "hidden",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  boxShadow: "0 12px 24px rgba(54, 37, 23, 0.12)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  "&:hover": {
                    transform: { sm: "translateY(-2px)" },
                    boxShadow: "0 14px 28px rgba(54, 37, 23, 0.2)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={src}
                  alt={`Imagen ${index + 1}`}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    aspectRatio: "4 / 5",
                    objectFit: "cover",
                    display: "block",
                    filter: "saturate(0.96)",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Dialog
        open={open}
        onClose={closeLightbox}
        fullWidth
        maxWidth="lg"
        sx={{
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(14, 10, 8, 0.88)",
          },
        }}
        PaperProps={{
          sx: {
            overflow: "hidden",
            borderRadius: { xs: 2.2, sm: 3.2 },
            background:
              "linear-gradient(180deg, rgba(31, 22, 17, 0.98) 0%, rgba(25, 18, 14, 0.98) 100%)",
            border: "1px solid rgba(255,255,255,0.11)",
            boxShadow: "0 28px 60px rgba(0, 0, 0, 0.45)",
          },
        }}
      >
        <DialogContent sx={{ p: { xs: 1.2, sm: 2.1 }, position: "relative" }}>
          <IconButton
            onClick={closeLightbox}
            aria-label="Cerrar galeria"
            sx={{
              position: "absolute",
              top: { xs: 8, sm: 12 },
              right: { xs: 8, sm: 12 },
              color: "#fff",
              bgcolor: "rgba(255,255,255,0.14)",
              zIndex: 10,
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.22)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          <IconButton
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Imagen anterior"
            sx={{
              position: "absolute",
              top: "45%",
              left: { xs: 6, sm: 14 },
              color: "#fff",
              bgcolor: "rgba(255,255,255,0.12)",
              zIndex: 8,
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.22)",
              },
            }}
          >
            <ArrowBackIosNewRoundedIcon fontSize="small" />
          </IconButton>

          <IconButton
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Imagen siguiente"
            sx={{
              position: "absolute",
              top: "45%",
              right: { xs: 6, sm: 14 },
              color: "#fff",
              bgcolor: "rgba(255,255,255,0.12)",
              zIndex: 8,
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.22)",
              },
            }}
          >
            <ArrowForwardIosRoundedIcon fontSize="small" />
          </IconButton>

          <Swiper
            keyboard
            modules={[Keyboard]}
            initialSlide={activeIndex}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {images.map((src, index) => (
              <SwiperSlide key={`lightbox-${src}`}>
                <Box
                  sx={{
                    width: "100%",
                    minHeight: { xs: "62vh", md: "70vh" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: { xs: 4.2, sm: 7 },
                    py: { xs: 2.2, sm: 3.5 },
                  }}
                >
                  <Box
                    component="img"
                    src={src}
                    alt={`Slide ${index + 1}`}
                    sx={{
                      width: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      borderRadius: 2.2,
                      border: "1px solid rgba(255,255,255,0.18)",
                    }}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 1,
              px: { xs: 1, sm: 2.5 },
              pb: { xs: 0.2, sm: 0.9 },
            }}
          >
            {images.map((src, index) => {
              const isActive = activeIndex === index;
              return (
                <Box
                  component="button"
                  type="button"
                  key={`thumb-${src}`}
                  onClick={() => swiperRef.current?.slideTo(index)}
                  aria-label={`Ir a imagen ${index + 1}`}
                  sx={{
                    p: 0,
                    border: "none",
                    borderRadius: 1.3,
                    overflow: "hidden",
                    cursor: "pointer",
                    outline: isActive ? "2px solid #fff" : "1px solid rgba(255,255,255,0.2)",
                    opacity: isActive ? 1 : 0.62,
                    transition: "opacity 0.2s ease",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={src}
                    alt={`Miniatura ${index + 1}`}
                    sx={{
                      width: "100%",
                      aspectRatio: "4 / 3",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>
              );
            })}
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Gallery;
