import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import PanoramaFishEyeBorderIcon from "@mui/icons-material/PanoramaFishEye";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import TurnRightIcon from "@mui/icons-material/TurnRight";
import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";

import ScreenShotImage from "../../../assets/png/Screenshot 2023-06-20 at 12.12.50 PM.png";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 4,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#ffb10b" : "#308fe8"
  }
}));

interface Props {
  data: {
    id: number;
    startTime: number;
    endTime: number;
    activity: string;
  };
}

const ScreenShotsCard = ({ data }: Props) => {
  const startTime = new Date(data.startTime).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
  const endTime = new Date(data.endTime).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
  console.log(startTime);

  return (
    <Box sx={{ width: "244px", display: "flex", flexDirection: "column", alignItems: "center", mt: 2 }}>
      <Box
        sx={{
          display: "inline-block",
          justifyContent: "center",
          backgroundColor: "#eff1f5",
          borderRadius: "20px",
          maxWidth: "100%",
          minHeight: "24px",
          padding: "3px 12px"
        }}
      >
        <Typography
          variant="h5"
          sx={{ display: "inline-block", textOverflow: "ellipsis", color: "#3e4956", fontSize: "13px", fontWeight: "600", margin: "0 auto" }}
        >
          Time Tracker
        </Typography>
      </Box>
      <Typography variant="h5" sx={{ textOverflow: "ellipsis", color: "#b0b9c4 !important", fontSize: "12px", fontWeight: "500", mt: 1, mb: 1 }}>
        No to-dos
      </Typography>
      <Card sx={{ width: "100%", boxShadow: "none !important", border: "1px solid #e4e9ef" }}>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden", // Ensures the hidden content doesn't overflow

            "&:hover": {
              "& .css-sw3gy7": {
                transform: "translateY(0)"
              }
            }
          }}
        >
          <CardMedia
            component="img"
            height="135"
            sx={{ aspectRatio: "5 / 3" }}
            // image={`https://picsum.photos/40?random=${data.id}`}
            image={ScreenShotImage}
            alt="Paella dish"
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              height: "100%",
              width: "100%",
              backgroundColor: "rgba(0,0,0,0.65)",

              transform: "translateY(-100%)",
              transition: "transform 0.1s ease"
            }}
            className="css-sw3gy7"
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#fff", padding: "3px 10px" }}>
              <Checkbox
                icon={<PanoramaFishEyeBorderIcon sx={{ color: "#fff" }} />}
                checkedIcon={
                  <CheckCircleOutlineIcon
                    sx={{
                      "& path": {
                        fill: "#2aa7ff"
                      },
                      color: "#fff"
                    }}
                  />
                }
              />

              <Box>
                <PermMediaIcon sx={{ mr: 1 }} fontSize="small" />
                <TurnRightIcon sx={{ mr: 1 }} fontSize="small" />
                <DeleteForeverIcon fontSize="small" />
              </Box>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  margin: "0 auto",
                  mt: 2,
                  display: "block",
                  backgroundColor: "#fff",
                  color: "#2b343f",
                  textTransform: "none !important",
                  fontSize: "12px",
                  fontWeight: "500",
                  "&:hover": {
                    backgroundColor: "#fffff2",
                    color: "#2b343f"
                  }
                }}
              >
                View Screens
              </Button>
            </Box>
          </Box>
        </Box>

        <CardContent sx={{ position: "relative" }}>
          <Typography variant="body1" color="text.secondary" sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
            {startTime} - {endTime} <EditIcon fontSize="small" color="info" />
          </Typography>
          <BorderLinearProgress variant="determinate" value={50} sx={{ mt: 1 }} />
          <Typography variant="body2" color="text.secondary" sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
            {data.activity}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              background: "#fff",
              borderRadius: "20px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.19)",

              position: "absolute",
              margin: "0 auto",
              padding: "5px 15px",
              top: "-15px",
              left: "50%",
              transform: "translateX(-50%)"
            }}
          >
            <Typography variant="h5" sx={{ color: "#2aa7ff", fontSize: "12px", fontWeight: "bold" }}>
              3 screens
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ScreenShotsCard;
