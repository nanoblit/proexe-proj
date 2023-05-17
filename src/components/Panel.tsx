import { Box, Divider, Paper } from "@mui/material";
import React from "react";

interface Props {
  header: string,
  buttons?: React.ReactNode,
  children: React.ReactNode,
}

export default function Panel({ header, buttons, children }: Props) {
  return (
    <Paper elevation={3}>
      <Box className="flex justify-between p-5">
        <h2 className="m-0">{header}</h2>
        {
          buttons &&
          <Box>
            {buttons}
          </Box>
        }
      </Box>
      <Divider/>
      <Box className="p-5">
        {children}
      </Box>
    </Paper>
  );
}