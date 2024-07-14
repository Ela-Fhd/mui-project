import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function BasicCard({ header, content }) {
  return (
    <Card
      sx={{
        minWidth: 275,
        margin: "20px 0",
      }}
    >
      {header}
      <CardContent
        sx={{
          textAlign: "center",
        }}
      >
        {content}
      </CardContent>
    </Card>
  );
}

export default BasicCard;
