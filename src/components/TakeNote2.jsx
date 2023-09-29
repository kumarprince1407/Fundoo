import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

import React, { useState } from "react";
// import MoreOptions from "./MoreOptions";

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
import ColorPalette from "./ColourPalette"; // Updated import
import TakeNote3 from "./TakeNote3";

//The TakeNote2 functional component, which receives several props:
// onClose, noteData, setNodeData,setShowTakeNote1,updateDashboardWithNewNote,and updatecolor.
const TakeNote2 = ({
  onClose,
  noteData,
  getNotes,
  setNodeData,
  setShowTakeNote1,
  updateDashboardWithNewNote,

  updatecolor, // Receive setCurrentColor function as a prop
}) => {
  // the useState hook is used to initialize a piece of local state within the TakeNote2 component.
  // The state variable is named data, and it is initially set to an object with three properties:
  // title, description, and color
  const [data, setData] = useState({
    title: "",
    description: "",
    color: "", //Initialize color in the data state
  });

  //This function 'change' is used to update the data state based on the input fields.
  // It utilizes the spread operator to update the specific property (title or description)
  // based on the id of the input field that triggered the change event

  const change = (e) => {
    //(prev) is a function argument that represents the previous state.
    //This is a common pattern when using the useState hook to update state based on the previous state.
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    // { ...prev, [e.target.id]: e.target.value } is an object that represents the new state.
    //  It uses the spread operator (...prev) to copy all properties from the previous
    //  state (prev) into a new object. Additionally, it updates a specific property based on
    // the e.target.id and e.target.value values.
  };

  // The function handleNoteClose is called when the user closes the note.
  // It performs the following actions: Checks if both the title and description are empty.
  // If so, it sets ShowTakeNote1 to true to return to TakeNote1. Calls the createNotes function
  // from the service module to create a new note using the data state.
  // Logs the note to the console.Sets ShowTakeNote1 to true to return to TakeNote1.

  const handleNoteClose = async () => {
    if (data.title === "" && data.description === "") {
      return setShowTakeNote1(true);
    }
    //call create note
    const note = await createNotes(data);
    //await is used to wait for the createNotes function to complete its execution
    // and return a result. The result is assigned to the variable note
    console.log(note);

    // Calling the Callback function to update the dashboard
    updateDashboardWithNewNote(note.data.data);

    setShowTakeNote1(true);
    window.location.reload();
  };

  //Function to handle colour change
  const handleColorChange = (newColor) => {
    // Update the 'color' property in the 'data' state
    setData((prevState) => ({ ...prevState, color: newColor }));
  };

  return (
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
          backgroundColor: data.color, // Apply the current color to the container
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
            // event handler for the onChange event of the input field. When a user types
            //  or changes the content of the input field, this function is called.
            //  It takes the event e as an argument, which represents the input event.
            //   When called, it updates the data state using the setData function.
            InputProps={{
              style: {
                // Remove the outline
                border: "none",
              },
            }}
          />
          <IconButton onClick={() => setShowTakeNote1(false)}>
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
            onChange={(e) => setData({ ...data, description: e.target.value })}
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
              <ColorPalette
                fontSize="12px"
                action={"create"}
                noteId={noteData}
                updatecolor={handleColorChange} // Pass the color change handler
                setNotes={setData} //Passing the setNotes function
              />
            </IconButton>

            <IconButton>
              <ImageOutlinedIcon />
            </IconButton>

            <IconButton>
              <ArchiveOutlinedIcon />
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
