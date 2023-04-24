import React from "react";
import MuiCard from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardHeader from "@mui/material/CardHeader";
import { Divider, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";

const Card = () => {
  return (
    <MuiCard sx={{ maxWidth: 345 }}>
      {/*---------------- card head -------------------*/}
      <CardMedi
        component="img"
        image="https://cdn.pixabay.com/photo/2023/04/15/17/08/bernese-mountain-dog-7928156_640.jpg"
        alt="Paella dish"
        sx={{ width: "100%", aspectRatio: "16/9", objectFit: "cover" }}
      />

      {/*---------------- card body -------------------*/}
      <CardContent sx={{ pb: 1 }}>
        <CardHeader
          title="Card Title"
          subheader="Card Subtitle"
          sx={{ p: 0, mb: 1 }}
        />
        <Divider />
        <Typography variant="body2" color="text.secondary" mt={1}>
          <Typography fontWeight={700} component="span">
            phone:{" "}
          </Typography>
          050-0000000
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Typography fontWeight={700} component="span">
            address:{" "}
          </Typography>
          Shoham 5 tel-aviv
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Typography fontWeight={700} component="span">
            card number:{" "}
          </Typography>
          1000000
        </Typography>
      </CardContent>

      {/*---------------- card footer -------------------*/}
      <CardActions
        disableSpacing
        sx={{ pt: 0, justifyContent: "space-between" }}
      >
        <Box>
          <IconButton aria-label="delete card">
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label="edit card">
            <EditIcon />
          </IconButton>
        </Box>

        <Box>
          <IconButton aria-label="call business">
            <CallIcon />
          </IconButton>
          <IconButton aria-label="add to fav">
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
