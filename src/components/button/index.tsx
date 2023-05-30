import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import * as React from "react";

interface ButtonProps {
  text: string;
  variant: "text" | "outlined" | "contained";
  color: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CustomButtons({ text, variant, color, onClick }: ButtonProps) {
  return (
    <Stack spacing={1} direction="row">
      <Button variant={variant} color={color} sx={{ width: "35px" }} onClick={onClick}>
        {text}
      </Button>
    </Stack>
  );
}
