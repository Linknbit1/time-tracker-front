import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import TurnRightIcon from "@mui/icons-material/TurnRight";
import { Box, Button, Fade, Tooltip } from "@mui/material";
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

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;

  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));
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
const ScreenShotsCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: "200px", boxShadow: "none !important", border: "1px solid #e4e9ef" }}>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden", // Ensures the hidden content doesn't overflow

          "&:hover": {
            "& .css-sw3gy7": {
              display: "block !important",
              transform: "translateY(0)" // Moves the element from top to bottom
            }
          }
        }}
      >
        <CardMedia component="img" height="112" image={ScreenShotImage} alt="Paella dish" />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            border: "2px solid blue",
            height: "100%",
            width: "100%",
            display: "none",
            backgroundColor: "rgba(0,0,0,0.65)",
            transform: "translateY(-100%)", // Initial position above the element
            transition: "transform 0.3s ease"
          }}
          className="css-sw3gy7"
        >
          <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
            <Checkbox
              sx={{
                color: "#4ccead"
              }}
            />
            <PermMediaIcon fontSize="medium" color="secondary" />
            <TurnRightIcon fontSize="medium" color="secondary" />
            <DeleteForeverIcon fontSize="medium" color="secondary" />
          </Box>
          <Box>
            <Button variant="contained" color="secondary" sx={{ ml: 5, mt: 2 }}>
              View Screens
            </Button>
          </Box>
        </Box>
      </Box>

      <CardContent sx={{ position: "relative" }}>
        <Typography variant="body1" color="text.secondary" sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          9:10 am - 9:20 am <EditIcon fontSize="small" color="info" />
        </Typography>
        <BorderLinearProgress variant="determinate" value={50} sx={{ mt: 1 }} />
        <Typography variant="body2" color="text.secondary" sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
          2% of 7 minutes
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            background: "#fff",
            borderRadius: "20px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.19)",

            position: "absolute",
            margin: "-18 auto 0",
            padding: "5px 15px",
            top: "-15px",
            left: "25%"
          }}
        >
          <Typography variant="h5" sx={{ color: "#2aa7ff", fontSize: "12px", fontWeight: "bold" }}>
            3 screens
          </Typography>
        </Box>
      </CardContent>

      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.</Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo
            in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant,
            about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
};

export default ScreenShotsCard;
