import React from "react";
import { Badge } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const FavoriteBadge = ({ favoriteCount }) => {
  return (
    <Badge
      badgeContent={
        <StarIcon style={{ color: "#FFD700", width: "1.2em", height: "1.2em" }} />
      }
      color="primary"
    >
      {favoriteCount}
    </Badge>
  );
};

export default FavoriteBadge;
