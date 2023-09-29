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
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { archiveItem } from "../services/noteService";

//The TakeNote3 functional component, which receives three props: noteData, getNotes, and viewType.
const TakeNote3 = ({ noteData, getNotes, viewType }) => {
  //receiing the viewType prop for conditional rendering:

  //Initializing  two state variables, title and description, using the useState hook.
  // They are initialized with values from the noteData prop.
  const [title, setTitle] = useState(noteData.title);
  const [description, setDescription] = useState(noteData.description);

  //The useEffect hook is used to update the title and description state variables when
  // the noteData prop changes. It sets the state values to match the current noteData.
  useEffect(() => {
    setTitle(noteData.title);
    setDescription(noteData.description);
  }, [noteData]);

  //This function handleTitleChange is an event handler for changes in the title input field.
  //It updates the title state variable based on the value entered in the input field.

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  //Archive
  // The archiveTextitem function is used to archive the current note.
  // It creates an object data with the note's ID and sets isArchived to true.
  // It then calls the archiveItem function from the service module to archive the note and
  // calls getNotes to refresh the list of notes
  const archiveTextitem = async () => {
    const data = { noteIdList: [noteData.id], isArchived: true }; //
    await archiveItem(data);
    getNotes();
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",

        flexDirection: "column",
        border: "1px solid gray",
        borderRadius: 2,
        padding: 2,
        // width: "600px",
        width: viewType === "grid" ? "280px" : "580px",
        marginLeft: viewType === "grid" ? "20px" : "44px",
        marginRight: "20px",
        marginBottom: "10px",
        marginTop: "10px",
        backgroundColor: noteData.color ? noteData.color : "",
        //The card's background color is determined by the noteData.color value if it exists
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
        <InputBase
          id="description"
          placeholder="..."
          variant="outlined"
          value={noteData.description}
          fullWidth
          onChange={(e) => setDescription(e.target.value)}
          //Event handler for the onChange event of the input field.
          // When we type or change the content of the input field,
          // this function is called. It takes the event e as an argument,
          //which represents the input event. When called, it sets the description
          // state (or variable) to the value of e.target.value
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
