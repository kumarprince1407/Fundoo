import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

import React, { useState } from "react";

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
import { createNotes } from "../services/noteService";

const TakeNote2 = ({ onClose }) => {
  //Adding functionality for Close button
  //To close the TakeNote2 container upon clicking the "Close" IconButton,
  // we can add a state variable to control the visibility of TakeNote2.
  //
  const [isVisible, setIsVisible] = useState(true);
  //
  const handleNoteClose = async () => {
    //call create note
    const note = await createNotes(data);
    console.log(note);
    setIsVisible(false);
    onClose(); //Notify the parent component about the closure
  };

  //Initialize state variables using the useState hook for data
  const [data, setData] = useState({ title: "", description: "" });

  const change = (e) => {
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    //Render only if isVisible is true
    <Container sx={{ width: "600px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          border: "1px solid gray",
          borderRadius: 2,
          padding: 2,
          width: "580px",
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
          <InputBase
            id="title"
            placeholder="Title"
            variant="outlined"
            fullWidth
            onChange={change}
            InputProps={{
              style: {
                // Remove the outline
                border: "none",
              },
            }}
          />
          <IconButton onClick={() => onClose(false)}>
            {/*Calling handleNoteClose to close the note*/}
            <FormControlLabel control={<PushPinOutlinedIcon />} />
            {/* FormControlLabel: It is a Material-UI component that provides a 
            label associated with a form control element. */}
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
            id="description"
            placeholder="Take a note..."
            variant="outlined"
            fullWidth
            onChange={change}
            InputProps={{
              style: {
                // Remove the outline
                border: "none",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",

            flexDirection: "row",

            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {/*Read about it*/}
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
          </Box>
          <Box>
            <IconButton onClick={handleNoteClose}>Close</IconButton>
          </Box>
        </Box>
      </Box>
    </Container>
  ); //Render nothing if isVisible is false
};

export default TakeNote2;
