import { Box, Link, Typography } from "@mui/material";

const FooterSignature = () => {
  return (
    <Box
      component="footer"
      sx={{
        minHeight: 54,
        px: 2,
        py: 1.2,
        backgroundColor: "var(--surface-soft)",
        borderTop: "1px solid var(--line-color)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "var(--font-body)",
          fontSize: { xs: "0.86rem", sm: "0.92rem" },
          color: "var(--text-secondary)",
          textAlign: "center",
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
          }}
        >
          @La Casa del Detalle
        </Link>
      </Typography>
    </Box>
  );
};

export default FooterSignature;
