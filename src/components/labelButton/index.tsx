import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import * as React from "react";

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        sx={{
          backgroundColor: "white",
          color: "#3e4956",
          fontSize: "12px",
          border: "1px solid #a3a8ad",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "white", // Override hover background color
            boxShadow: "none", // Remove hover box shadow,
            border: "1px solid #c4cfdc"
          }
        }}
        variant="contained"
        endIcon={<KeyboardArrowDownIcon />}
      >
        Actions
      </Button>
    </Stack>
  );
}
