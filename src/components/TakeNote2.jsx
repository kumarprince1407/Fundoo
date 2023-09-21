import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

import React from "react";

import {
  FormControlLabel,
  IconButton,
  Box,
  Typography,
  Container,
  InputBase,
} from "@mui/material";

import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UTurnLeftRoundedIcon from "@mui/icons-material/UTurnLeftRounded";
import UTurnRightRoundedIcon from "@mui/icons-material/UTurnRightRounded";

const TakeNote2 = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          border: "1px solid gray",
          borderRadius: 2,
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",

            flexDirection: "row",
            // width: 200,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">Title</Typography>
          <IconButton>
            <FormControlLabel control={<PushPinOutlinedIcon />} />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",

            alignItems: "center",

            flexDirection: "row",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          {/* Using InputBase instead of TextField to remove the border from the text field. */}
          <InputBase
            id="outlined-basic"
            placeholder="Take a note..."
            variant="outlined"
            fullWidth
            InputProps={{
              style: {
                // Remove the outline
                border: "none",
              },
            }}
          />
        </Box>
        <Box>
          <IconButton>
            <AddAlertOutlinedIcon />
          </IconButton>
          <IconButton>
            <PersonAddAltOutlinedIcon />
          </IconButton>
          <IconButton>
            <ColorLensOutlinedIcon />
          </IconButton>

          <IconButton>
            <ImageOutlinedIcon />
          </IconButton>

          <IconButton>
            <ArchiveOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
          <IconButton>
            <UTurnLeftRoundedIcon />
          </IconButton>
          <IconButton></IconButton>
          <IconButton>
            <UTurnRightRoundedIcon />
          </IconButton>
          <IconButton>Close</IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default TakeNote2;
