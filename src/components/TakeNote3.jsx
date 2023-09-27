import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

import React, { useState, useEffect } from "react";
import MoreOptions from "./MoreOptions";
import ColorPalette from "./ColourPalette";

import {
  FormControlLabel,
  IconButton,
  Box,
  Container,
  InputBase,
} from "@mui/material";

import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import PushPinRoundedIcon from "@mui/icons-material/PushPinRounded";
import { archiveItem } from "../services/noteService";

const TakeNote3 = ({ noteData, getNotes, viewType }) => {
  //receiing the viewType prop for conditional rendering:
  //Set the initial values of the InputBase fields
  const [title, setTitle] = useState(noteData.title);
  const [description, setDescription] = useState(noteData.description);

  //delete TakeNote3

  useEffect(() => {
    setTitle(noteData.title);
    setDescription(noteData.description);
  }, [noteData]);

  //Define the onChange handler for the title input
  const handleTitleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  //Archive
  const archiveTextitem = async () => {
    const data = { noteIdList: [noteData.id], isArchived: true }; //
    await archiveItem(data);
    getNotes();
  };
  return (
    // <Container sx={{ width: "350px" }}>

    <Box
      sx={{
        display: "flex",
        justifyContent: "center",

        flexDirection: "column",
        border: "1px solid gray",
        borderRadius: 2,
        padding: 2,
        // width: "600px",
        width: viewType === "grid" ? "280px" : "600px",
        marginLeft: "20px",
        marginRight: "20px",
        marginBottom: "10px",
        marginTop: "10px",
        backgroundColor: noteData.color ? noteData.color : "",
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
          value={noteData.title} //Set the value to the title state
          onChange={handleTitleChange} //Define an onChange handler
          InputProps={{
            style: {
              // Remove the outline
              border: "none",
            },
          }}
        />
        <IconButton>
          <FormControlLabel
            control={<PushPinRoundedIcon />}
            // onClick={() => onDelete()}
          />
        </IconButton>
      </Box>
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
          placeholder="..."
          variant="outlined"
          value={noteData.description}
          fullWidth
          onChange={(e) => setDescription(e.target.value)}
          InputProps={{
            style: {
              // Remove the outline
              border: "none",
            },
          }}
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton>
          <AddAlertOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonAddAltOutlinedIcon />
        </IconButton>
        {/* <ColorLensOutlinedIcon /> */}

        <IconButton>
          <ImageOutlinedIcon />
        </IconButton>
        <ColorPalette
          fontSize="12px"
          action={"edit"}
          noteId={noteData.id}
          updatecolor={getNotes}
        />
        <IconButton onClick={archiveTextitem}>
          <ArchiveOutlinedIcon />
        </IconButton>
        <IconButton>
          <MoreOptions noteId={noteData.id} updateData={getNotes} />
        </IconButton>

        <IconButton></IconButton>
      </Box>
    </Box>

    // </Container>
  );
};

export default TakeNote3;
