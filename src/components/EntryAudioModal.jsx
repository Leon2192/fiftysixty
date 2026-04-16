import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import MusicOffRoundedIcon from "@mui/icons-material/MusicOffRounded";

const EntryAudioModal = ({ open, onSelect }) => {
  return (
    <Modal
      open={open}
      aria-labelledby="entry-audio-title"
      closeAfterTransition
      disableEscapeKeyDown
    >
      <Box
        sx={{
          minHeight: "100dvh",
          width: "100%",
          px: 2,
          display: "grid",
          placeItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: 'url("/images/15/portada.jpeg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scale(1.08)",
            filter: "blur(10px)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(31, 23, 18, 0.45) 0%, rgba(31, 23, 18, 0.62) 100%)",
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: 540,
            p: { xs: 2.5, sm: 4 },
            pt: { xs: 6, sm: 6.5 },
            borderRadius: 4,
            border: "1px solid var(--line-color)",
            backgroundColor: "rgba(255, 255, 255, 0.86)",
            boxShadow: "0 16px 40px rgba(65, 45, 26, 0.16)",
            textAlign: "center",
            overflow: "visible",
          }}
        >
          <Box
            component="img"
            src="/images/15/three.jpeg"
            alt="Foto destacada"
            sx={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: 84, sm: 96 },
              height: { xs: 84, sm: 96 },
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #fff",
              boxShadow: "0 10px 22px rgba(20, 14, 11, 0.28)",
            }}
          />

          <Typography
            id="entry-audio-title"
            sx={{
              fontFamily: "var(--font-title)",
              fontSize: { xs: "2.05rem", sm: "2.7rem" },
              fontWeight: 700,
              color: "var(--text-primary)",
              mb: 3.5,
            }}
          >
            ¡Cumple 60/50 de Fabian y Oscar!
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ justifyContent: "center" }}
          >
            <Button
              variant="contained"
              startIcon={<MusicNoteRoundedIcon />}
              onClick={() => onSelect(true)}
              sx={{
                minWidth: 220,
                borderRadius: 999,
                py: 1.1,
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                backgroundColor: "var(--accent-main)",
                color: "#fff",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "var(--accent-dark)",
                },
              }}
            >
              Ingresar con musica
            </Button>

            <Button
              variant="outlined"
              startIcon={<MusicOffRoundedIcon />}
              onClick={() => onSelect(false)}
              sx={{
                minWidth: 220,
                borderRadius: 999,
                py: 1.1,
                borderColor: "var(--line-dark)",
                color: "var(--text-primary)",
                textTransform: "none",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                "&:hover": {
                  borderColor: "var(--accent-main)",
                  backgroundColor: "var(--surface-soft)",
                },
              }}
            >
              Ingresar sin musica
            </Button>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
};

export default EntryAudioModal;
